<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ControllerBase;
use App\Exceptions\ServerException;

class AfastamentoController extends ControllerBase {
    public function checkPermissions($action, $request, $service, $unidade, $usuario) {
        switch ($action) {
            case 'STORE':
                if (!$usuario->hasPermissionTo('MOD_AFT_INCL')) throw new ServerException("CapacidadeStore");
                break;
            case 'EDIT':
                if (!$usuario->hasPermissionTo('MOD_AFT_EDT')) throw new ServerException("CapacidadeEdit");
                break;
            case 'DESTROY':
                if (!$usuario->hasPermissionTo('MOD_AFT_EXCL')) throw new ServerException("CapacidadeDestroy");
                break;
        }
     }
}
