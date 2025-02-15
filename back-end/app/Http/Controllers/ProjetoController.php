<?php

namespace App\Http\Controllers;

use App\Models\Projeto;
use App\Services\ProjetoService;
use Illuminate\Http\Request;
use App\Http\Controllers\ControllerBase;
use App\Exceptions\ServerException;

class ProjetoController extends ControllerBase {
    public function checkPermissions($action, $request, $service, $unidade, $usuario) {
        switch ($action) {
            case 'STORE':
                if (!$usuario->hasPermissionTo('MOD_PROJ_INCL')) throw new ServerException("CapacidadeStore", "Inserção não realizada");
                break;
            case 'EDIT':
                if (!$usuario->hasPermissionTo('MOD_PROJ_EDT')) throw new ServerException("CapacidadeStore", "Edição não realizada");
                break;
            case 'DESTROY':
                if (!$usuario->hasPermissionTo('MOD_PROJ_EXCL')) throw new ServerException("CapacidadeStore", "Exclusão não realizada");
                break;
        }
    }
}
