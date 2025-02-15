<?php

namespace App\Http\Controllers;

use App\Exceptions\Contracts\IBaseException;
use App\Exceptions\LogError;
use Illuminate\Http\Request;
use App\Services\IntegracaoService;  
use App\Exceptions\ServerException;
use Illuminate\Support\Facades\Log;
use Throwable;

class IntegracaoController extends ControllerBase {

    public function checkPermissions($action, $request, $service, $unidade, $usuario) {

        switch ($action) {
            case 'STORE':
                if (!$usuario->hasPermissionTo('MOD_DEV_TUDO')) throw new ServerException("CapacidadeStore", "Inserção não realizada");
                break;
            case 'EDIT':
                if (!$usuario->hasPermissionTo('MOD_DEV_TUDO')) throw new ServerException("CapacidadeStore", "Edição não realizada");
                break;
            case 'DESTROY':
                if (!$usuario->hasPermissionTo('MOD_DEV_TUDO')) throw new ServerException("CapacidadeStore", "Exclusão não realizada");
                break;
            case 'QUERY':
                if (!$usuario->hasPermissionTo('MOD_DEV_TUDO')) throw new ServerException("CapacidadeStore", "Consulta não realizada");
                break;   
            case 'GETBYID':
                if (!$usuario->hasPermissionTo('MOD_DEV_TUDO')) throw new ServerException("CapacidadeStore", "Consulta não realizada");
                break;  
        }
    }

    public function sincronizar(Request $request) {
        $this->service = new IntegracaoService();
        try {
            $data = $request->validate([
                'servidores' => ['required'],
                'unidades' => ['required'],
                'entidade' => ['required']
            ]);
            return response()->
                json([$this->service->sincronizar($data)],
                    $status = 200,
                    $headers = ["Content-Type" => "application/json"], 
                    $options = 256);

        } catch (Throwable $e) {
            return response()->
                json(['error' => $e->getMessage()],
                    $status = 200,
                    $headers = ["Content-Type" => "application/json"],
                    $options = 256);
        }
    }

    public function sincronizarPetrvs(Request $request) {
        try {
            $this->checkPermissions("STORE", $request, $this->service, $this->getUnidade($request), $this->getUsuario($request));
            $data = $request->validate([
                'entity.atualizar_unidades' => ['required'],
                'entity.atualizar_servidores' => ['required'],
                'entity.atualizar_gestores' => ['required'],
                'entity.usar_arquivos_locais' => ['required'],
                'entity.gravar_arquivos_locais' => ['required'],
                'entity.entidade_id' => ['required'],
                'with' => ['array']
            ]);
            $entity = $this->service->sincronizarPetrvs($data,self::loggedUser()->id,$request);
            $result = $this->service->getById([
                'id' => $entity->id,
                'with' => ['entidade','usuario']
            ]);
            return response()->
                json(['success' => true, 'rows' => [$result]],
                    $status = 200,
                    $headers = ["Content-Type" => "application/json"],
                    $options = 256);
        } catch (Throwable $e) {
            LogError::newError("Erro ao sincronizar com o SIAPE:", $e);
            return response()->
                json(['error' => $e->getMessage()],
                    $status = 200,
                    $headers = ["Content-Type" => "application/json"],
                    $options = 256);
        }
    }

    public function showResponsaveis(Request $request) {
        try {
            $this->checkPermissions("QUERY", $request, $this->service, $this->getUnidade($request), $this->getUsuario($request));
            return response()->json(['success' => true, 'responsaveis' => $this->service->showResponsaveis()]);
        }  catch (IBaseException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
        catch (Throwable $e) {
            $dataError = throwableToArrayLog($e);
            Log::error($dataError);
            return response()->json(['error' => "Codigo ".$dataError['code'].": Ocorreu um erro inesperado."]);
        }
    }

    public function buscaProcessamentosPendentes(Request $request) {
        try {
            $this->checkPermissions("QUERY", $request, $this->service, $this->getUnidade($request), $this->getUsuario($request));
            return response()->json(['success' => true, 'processamentos' => $this->service->buscaProcessamentosPendentes()]);
        }  catch (IBaseException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
        catch (Throwable $e) {
            $dataError = throwableToArrayLog($e);
            Log::error($dataError);
            return response()->json(['error' => "Codigo ".$dataError['code'].": Ocorreu um erro inesperado."]);
        }
    }
}
 