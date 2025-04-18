<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Logs extends Model
{
  public function __construct(array $attributes = [])
  {
    parent::__construct($attributes);

    // Define a conexão do modelo com base na configuração 'database.default'
    $this->connection = env('DB_CONNECTION', 'mysql');
  }
  protected $table = 'logs';
  protected $fillable = ['tenant_id', 'level', 'message', 'context'];
  protected static function boot()
  {
    parent::boot();

    // Adiciona um global scope para ordenar os logs
    static::addGlobalScope('order', function (Builder $builder) {
      $builder->orderBy('created_at', 'desc');
    });
  }
  // Relação com o tenant, se aplicável
  public function tenant()
  {
    return $this->belongsTo(Tenant::class);
  }

  // Scope para filtrar por data de criação
  public function scopeCreatedAt($query, $date)
  {
    return $query->whereDate('created_at', $date);
  }

  // Scope para filtrar por tenant_id
  public function scopeTenantId($query, $tenantId)
  {
    return $query->where('tenant_id', $tenantId);
  }
}
