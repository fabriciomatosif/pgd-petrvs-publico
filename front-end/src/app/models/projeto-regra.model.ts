import { Base } from './base.model';
import { Projeto } from './projeto.model';

export class ProjetoRegra extends Base {
    public projeto?: Projeto;

    public nome: string = ""; /* Nome da regra */
    public data_inicio: Date = new Date(); /* Data de criação */
    public data_fim: Date | null = null; /* Data final do registro */

    public projeto_id: string = "";

    public constructor(data?: any) { super(); this.initialization(data); }
}