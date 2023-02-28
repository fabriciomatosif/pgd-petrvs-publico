import { Base } from './base.model';
import { TipoModalidade } from './tipo-modalidade.model';
import { Programa } from './programa.model';
import { Documento, HasDocumentos } from './documento.model';
import { Entidade } from './entidade.model';
import { AdesaoUsuario } from './adesao-usuario.model';
import { AdesaoUnidade } from './adesao-unidade.model';

export type Status = "SOLICITADO" | "HOMOLOGADO" | "CANCELADO";

export class Adesao extends Base implements HasDocumentos{
    public tipo_modalidade?: TipoModalidade;
    public unidades?: AdesaoUnidade[];
    public usuarios?: AdesaoUsuario[];
    public programa?: Programa;
    public entidade?: Entidade;
    public documento?: Documento;


    public status: Status = "SOLICITADO"; //tempo_total menos os afastamentos
    public data_inicio_vigencia: Date = new Date(); //Inicio do plano
    public data_fim_vigencia: Date = new Date(); //Fim do plano
    public data_inicio: Date = new Date(); /* Data de início */
    public data_fim: Date | null = null; /* Data do fim */
    public programa_id: string = "";
    public usuario_id: string = "";
    public unidade_id: string = "";
    public entidade_id: string = "";
    public tipo_modalidade_id: string = "";
    public documento_id: string | null = null;
    public documentos: Documento[] = []; /*TCR*/

    public constructor(data?: any) { super(); this.initialization(data); }
}