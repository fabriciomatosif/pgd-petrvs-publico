<?php

namespace App\Services;
use App\Services\ServiceBase;
use Illuminate\Support\Facades\DB;
use App\Models\Perfil;

class NivelAcessoService extends ServiceBase{
  
  const PERFIL_DESENVOLVEDOR = 0;
  const PERFIL_ADMINISTRADOR = 1;
  const PERFIL_CHEFIA = 3;
  const PERFIL_PARTICIPANTE = 5;


  static function getPerfilDesenvolvedor(): ?Perfil {
      return Perfil::where('nivel', self::PERFIL_DESENVOLVEDOR)->first();
  }
  static function getPerfilChefia(): ?Perfil {
    return Perfil::where('nivel', self::PERFIL_CHEFIA)->first();
  }
  static function getPerfilAdministrador(): ?Perfil {
    return Perfil::where('nivel', self::PERFIL_ADMINISTRADOR)->first();
  }
  static function getPerfilParticipante(): ?Perfil {
    return Perfil::where('nivel', self::PERFIL_PARTICIPANTE)->first();
  }
}