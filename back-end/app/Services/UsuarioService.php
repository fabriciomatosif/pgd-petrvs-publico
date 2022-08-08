<?php

namespace App\Services;

use App\Models\Usuario;
use App\Models\Demanda;
use App\Models\Plano;
use App\Models\Unidade;
use App\Models\DemandaEntrega;
use App\Services\ServiceBase;
use App\Services\PlanoService;
use App\Services\DemandaService;
use App\Services\RawWhere;
use App\Traits\UseDataFim;
use Illuminate\Support\Facades\Auth;

class UsuarioService extends ServiceBase
{
    use UseDataFim;

    public function proxySearch($query, &$data, &$text) {
        $data["where"][] = ["subordinadas", "==", true];
        return $this->proxyQuery($query, $data);

/*        $where = [];
        $unidade_id = null;
        $vinculadas = false;
        foreach($data["where"] as $condition) {
            if(is_array($condition) && $condition[0] == "unidade_id") { 
                $unidade_id = $condition[2];
            } else if(is_array($condition) && $condition[0] == "subordinadas") { 
                $vinculadas = $condition[2];
            } else {
                array_push($where, $condition);
            }
        }
        $unidades_ids = [];
        if(!empty($unidade_id)) {
            array_push($unidades_ids, $unidade_id);
        } else {
            $usuario = Auth::user();
            foreach($usuario->lotacoes as $lotacao) {
                array_push($unidades_ids, $lotacao->unidade_id);
            }
        }
        if($vinculadas) {
            $origens = UnidadeOrigemAtividade::whereIn("unidade_id", $unidades_ids)->whereNotIn("unidade_origem_atividade_id", $unidades_ids)->get();
            $unidades_ids = array_merge($unidades_ids, array_map(fn($origem) => $origem->unidade_origem_atividade_id, $origens->all()));
        }
        array_push($where, ["unidade_id", "in", $unidades_ids]);
        $data["where"] = $where;
        return $data;*/
    }

    public function hasLotacao($id, $usuario = null, $subordinadas = true) {
        return Unidade::where("id", $id)->whereRaw($this->lotacoesWhere($subordinadas, $usuario))->count() > 0;
        /*Usuario::where("id", $usuario->id)->whereHas('lotacoes', function (Builder $query) use ($id) {
            $query->where('id', $id);
        })->count() > 0;*/
    }

    public function lotacoesWhere($subordinadas, $usuario = null, $prefix = "") {
        $where = [];
        $prefix = empty($prefix) ? "" : $prefix . ".";
        $usuario = $usuario ?? Auth::user();
        foreach($usuario->lotacoes as $lotacao) {
            $where[] = $prefix . "id = '" . $lotacao->unidade_id . "'";
            if($subordinadas) $where[] = $prefix . "path like '%" . $lotacao->unidade_id . "%'";
        }
        $result = implode(" OR ", $where);
        return empty($result) ? "false" : "(" . $result . ")";
    }

    public function proxyQuery($query, &$data) {
        $usuario = Auth::user();
        $where = [];
        $subordinadas = true;
        foreach($data["where"] as $condition) {
            if(is_array($condition) && $condition[0] == "lotacao") {
                array_push($where, new RawWhere("EXISTS(SELECT id FROM lotacoes where_lotacoes WHERE where_lotacoes.usuario_id = usuarios.id AND where_lotacoes.unidade_id = ?)", [$condition[2]]));
            } else if(is_array($condition) && $condition[0] == "subordinadas") {
                $subordinadas = $condition[2];
            } else {
                array_push($where, $condition);
            }
        }
        if(!$usuario->hasPermissionTo("MOD_USER_TUDO")) {
            $lotacoesWhere = $this->lotacoesWhere($subordinadas, null, "where_unidades"); 
            array_push($where, new RawWhere("EXISTS(SELECT where_lotacoes.id FROM lotacoes where_lotacoes LEFT JOIN unidades where_unidades ON (where_unidades.id = where_lotacoes.unidade_id) WHERE where_lotacoes.usuario_id = usuarios.id AND ($lotacoesWhere))", []));
        }
        $data["where"] = $where;
        return $data;
    }

    public function dashboard($usuario_id) {
        $demandaService = new DemandaService();
        $planoService = new PlanoService();
        $planosAtivos = $planoService->planosAtivos($usuario_id);
        $planos_ids = [];
        $result = [
            "total_demanda" => 0,
            "total_atrasadas" => 0,
            "total_iniciadas" => 0,
            "total_concluidas" => 0,
            "produtividade" => 0,
            "demandas_totais_nao_concluidas" => 0,
            "demandas_totais_atrasadas" => 0
        ];
        foreach($planosAtivos as $plano) {
            array_push($planos_ids, $plano->id);
        }
        $demandas = Demanda::where("usuario_id", $usuario_id)->whereIn("plano_id", $planos_ids)->get();
        $demandasTotaisNaoConcluidas = Demanda::where("usuario_id", $usuario_id)->whereNull('data_entrega')->get();
        $demandasTotaisConcluidas = Demanda::where("usuario_id", $usuario_id)->whereNotNull('data_entrega')->get();
        $tarefasTotaisNaoConcluidas = DemandaEntrega::where("usuario_id", $usuario_id)->where('concluido', 0)->get();

        foreach($demandas as $demanda) {
            $metadados = $demandaService->metadados($demanda);
            $result["total_demanda"]++;
            $result["total_atrasadas"] += $metadados["atrasado"] ? 1 : 0;
            $result["total_iniciadas"] += $metadados["iniciado"] ? 1 : 0;
            $result["total_concluidas"] += $metadados["concluido"] ? 1 : 0;
            $result["produtividade"] += $metadados["concluido"] ? $metadados["produtividade"] : 0;
        }

        foreach($demandasTotaisNaoConcluidas as $demanda) {
            $metadados = $demandaService->metadados($demanda);
            $result["demandas_totais_atrasadas"] += $metadados["atrasado"] ? 1 : 0;
        }

        $result["demandas_totais_nao_concluidas"] = $demandasTotaisNaoConcluidas->count();
        $result["demandas_totais_concluidas"] = $demandasTotaisConcluidas->count();
        $result["tarefas_totais_nao_concluidas"] = $tarefasTotaisNaoConcluidas->count();

        $result["produtividade"] = $result["total_concluidas"] > 0 ? $result["produtividade"] / $result["total_concluidas"] : 0;
        return $result;
    }

    public function planosPorPeriodo($usuario_id, $inicioPeriodo = null, $fimPeriodo = null){
        $result = [];
        $planos = Plano::where("usuario_id", $usuario_id)->with(['demandas', 'unidade', 'tipoModalidade'])->get();
        if ($inicioPeriodo == null || $fimPeriodo == null) {
            $result = $planos;
        } else {
            foreach ($planos as $plano) {
                if (CalendarioService::between($plano['data_inicio_vigencia'], $inicioPeriodo, $fimPeriodo) || CalendarioService::between($plano['data_fim_vigencia'], $inicioPeriodo, $fimPeriodo)) array_push($result, $plano);
            }
        }
        return $result;
    }

}