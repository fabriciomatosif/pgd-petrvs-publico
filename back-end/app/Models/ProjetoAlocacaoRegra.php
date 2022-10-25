<?php

namespace App\Models;

use App\Models\ModelBase;
use App\Models\ProjetoAlocacao;
use App\Models\ProjetoRegra;
use App\Traits\AutoDataInicio;
use App\Traits\HasDataFim;

class ProjetoAlocacaoRegra extends ModelBase
{
    use AutoDataInicio, HasDataFim;

    protected $table = 'projetos_alocacoes_regras';

    public $fillable = [
        'projeto_alocacao_id',
        'regra_id'
    ];

    /*public $fillable_changes = [
    ];

    public $fillable_relations = [
    ];*/

    public $delete_cascade = [];

    // Has
    //public function () { return $this->hasMany(::class); }    
    // Belongs
    public function projetoAlocacao() { return $this->belongsTo(ProjetoAlocacao::class); }    
    public function regra() { return $this->belongsTo(ProjetoRegra::class); }    
}