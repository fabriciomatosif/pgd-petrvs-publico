<?php

namespace App\Services\API_PGD\Resources;

use App\Exceptions\ExportPgdException;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class ParticipanteResource extends JsonResource
{
    public function toArray(Request $request)
    {
        if (!$this->ultimaParticipacaoPrograma){
            throw new ExportPgdException("Usuário {$this->id} sem Participação");
        }

        if (!$this->matricula){
            throw new ExportPgdException("Usuário {$this->id} sem Matrícula");
        }

        if (!$this->ultimoPlanoTrabalho){
            throw new ExportPgdException("Usuário {$this->id} sem Plano de Trabalho");
        }

        $instituidora = $this->ultimaParticipacaoPrograma->programa->unidade ?? null;
        
        if (!$instituidora || !$instituidora->codigo){
            throw new ExportPgdException("Usuário {$this->id} sem Unidade Instituidora");
        }

        $unidadeIntegrante = $this->unidadesIntegrantes->first();

        if (!$unidadeIntegrante || !$unidadeIntegrante->unidade || !$unidadeIntegrante->unidade->codigo){
            throw new ExportPgdException("Usuário {$this->id} não possui unidade de Lotação");
        }

        $dataAssinatura = $this->ultimaAssinatura->data_assinatura ?? null;

        if (!$dataAssinatura){
            throw new ExportPgdException("Usuário {$this->id} não possui data de assinatura");
        }

        if (!$this->ultimoPlanoTrabalho->tipoModalidade){
            throw new ExportPgdException("Usuário {$this->id} não possui modalidade definida");
        }
        
        $modalidade = new ModalidadeResource($this->ultimoPlanoTrabalho->tipoModalidade);

        $result = [
            "id"                        => $this->id,
            "tipo"                      => 'participante',
            "origem_unidade"            => "SIAPE",
            'cod_unidade_instituidora'  => $instituidora->codigo ?? null,
            'cod_unidade_lotacao'       => $this->lotacao->unidade->codigo ?? null,
            'matricula_siape'           => str_pad($this->matricula, 7, '0', STR_PAD_LEFT),
            'cpf'                       => $this->cpf,
            'situacao'                  => $this->ultimaParticipacaoPrograma->habilitado ?? 0,
            "modalidade_execucao"       => $modalidade->get(),
            "data_assinatura_tcr"       => $dataAssinatura ? Carbon::parse($dataAssinatura)->toDateTimeLocalString() : null
        ];

        return $result;
    }
}
