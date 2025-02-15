import { LookupItem } from '../services/lookup.service';
import { Base } from './base.model';
import { Entidade } from './entidade.model';
import { PlanejamentoObjetivo } from './planejamento-objetivo.model';
import { Unidade } from './unidade.model';

export class Planejamento extends Base {
    public unidade?: Unidade;
    public entidade?: Entidade;
    public objetivos?: PlanejamentoObjetivo[];
    public objetivos_okr?: PlanejamentoObjetivo[];
    public planejamento_superior?: Planejamento;
    
    public data_arquivamento: Date | null = null;  /* Data de arquivamento */
    public data_inicio: Date = new Date(); /* Data de início do planejamento */
    public data_fim: Date | null = null; /* Data final do planejamento */
    public nome: string = ""; /* Nome do planejamento institucional */
    public missao: string = ""; /* Missão da Instituição/Unidade */
    public visao: string = ""; /* Visão da Instituição/Unidade */
    public valores: LookupItem[] = []; /* Valores da Instituição/Unidade */
    public resultados_institucionais: LookupItem[] = []; /* Resultados da Instituição/Unidade */
    
    public unidade_id: string | null = null; /* Unidade à qual está vinculado o planejamento institucional */
    public entidade_id: string | null = null; /* Entidade à qual está vinculado o planejamento institucional */
    public planejamento_superior_id: string | null = null; /* Planejamento hierarquicamente superior ao qual o atual planejamento está vinculado */

    public constructor(data?: any) { super(); this.initialization(data); }
}
