import { Injectable, Injector } from '@angular/core';
import { LookupItem, LookupService } from './lookup.service';
import { FormGroup } from '@angular/forms';
import { IntegranteConsolidado } from '../models/unidade-integrante.model';
import { IntegranteAtribuicao } from '../models/base.model';
import { UtilService } from './util.service';
import { DialogService } from './dialog.service';
import { LexicalService } from './lexical.service';
import { Unidade } from '../models/unidade.model';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class IntegranteService {

  public lookup: LookupService;
  public lex: LexicalService;
  public util: UtilService;
  public dialog: DialogService;

  constructor(public injector: Injector) {
    /* Injections */
    this.lookup = this.injector.get<LookupService>(LookupService);
    this.lex = this.injector.get<LexicalService>(LexicalService);
    this.dialog = this.injector.get<DialogService>(DialogService);
    this.util = this.injector.get<UtilService>(UtilService);
  }

  /**
   * 
   * @param atribuicoes 
   * @returns 
   */
  public converterAtribuicoes(atribuicoes: string[]): LookupItem[] {
    return atribuicoes.map((x: string) => Object.assign({}, {
      key: x,
      value: this.lookup.getValue(this.lookup.UNIDADE_INTEGRANTE_TIPO, x),
      icon: this.lookup.getIcon(this.lookup.UNIDADE_INTEGRANTE_TIPO, x),
      color: this.lookup.getColor(this.lookup.UNIDADE_INTEGRANTE_TIPO, x)
    }))
  }

  /**
   * Verifica se haverá alteração na atribuição de GESTOR para o usuário: nenhuma alteração, perda da gerência, ganho de uma gerência ou troca de gerência de uma unidade por outra. 
   * Retorna um array com as seguintes informações, nessa ordem: [tipo de alteração, índice do grid relativo à antiga gerência, mensagem para a caixa de diálogo, booleano indicando se necessitará alteração na lotação do usuário]
   * @param novasAtribuicoes  Array com o novo conjunto de atribuições provenientes da edição do formulário
   * @param row               Dados originais do item unidade/atribuições que está sendo editado
   * @param itensGrid         Array com todos os itens originais de unidade/atribuições vinculados ao usuário
   * @param nomeOuSigla       Nome do usuario, ou Sigla da unidade, a que estão vinculados os itens do grid
   */
  public haAlteracaoGestor(novasAtribuicoes: IntegranteAtribuicao[], row: IntegranteConsolidado, itensGrid: IntegranteConsolidado[], nomeOuSigla: string): [string, number, string, boolean] {
    let msg = "";
    let perda = this.util.array_diff(row.atribuicoes, novasAtribuicoes).includes('GESTOR');
    let ganho = this.util.array_diff(novasAtribuicoes, row.atribuicoes).includes('GESTOR');
    if (!perda && !ganho) return ['nenhuma', -1, "", false];
    let meio = this.lookup.getValue(this.lookup.UNIDADE_INTEGRANTE_TIPO, "GESTOR") + " " + this.lex.translate("da Unidade") + " ";
    if (perda) {
      msg = nomeOuSigla.toUpperCase() + " deixará de ser " + meio + row.unidade_sigla?.toUpperCase() + ".";
      return ['perda', -1, msg, false];
    }
    let ehLotadoNaNovaGerencia = row.atribuicoes.includes("LOTADO");
    msg = nomeOuSigla.toUpperCase() + " passará a ser " + meio + row.unidade_sigla?.toUpperCase();
    let itemAntigaGerencia = itensGrid.find(i => i.atribuicoes.includes('GESTOR'));
    let indiceItemLotacao = itensGrid.findIndex((item, index, obj) => item.atribuicoes.includes('LOTADO'));
    msg = itemAntigaGerencia?.id.length ? msg + " e deixará de ser " + meio + itemAntigaGerencia.unidade_sigla + ". " : msg + ". ";
    if (!ehLotadoNaNovaGerencia && indiceItemLotacao >= 0) msg += "Por consequência, sua lotação será alterada de " + itensGrid[indiceItemLotacao].unidade_sigla?.toUpperCase() + " para " + row.unidade_sigla?.toUpperCase() + ".";
    return itemAntigaGerencia?.id.length ? ['troca', itensGrid.findIndex(x => x.id == itemAntigaGerencia?.id), msg, true] : ['ganho', -1, msg, !ehLotadoNaNovaGerencia];
  }

  /**
 * Verifica se haverá alteração na GERÊNCIA da unidade: nenhuma alteração, perda do gestor, ganho de um gestor ou troca de gestor de um usuário para outro. 
 * Retorna um array com as seguintes informações, nessa ordem: [tipo de alteração, índice do grid relativo ao antigo gestor, mensagem para a caixa de diálogo, booleano indicando se necessitará alteração na lotação do usuário]
 * @param novasAtribuicoes  Array com o novo conjunto de atribuições provenientes da edição do formulário
 * @param row               Dados originais do item usuário/atribuições que está sendo editado
 * @param itensGrid         Array com todos os itens originais de usuário/atribuições vinculados à unidade
 * @param nomeOuSigla       Nome do usuario, ou Sigla da unidade, a que estão vinculados os itens do grid
 */
  public haAlteracaoGerencia(novasAtribuicoes: IntegranteAtribuicao[], row: IntegranteConsolidado, itensGrid: IntegranteConsolidado[], nomeOuSigla: string): [string, number, string, boolean] {
    // TODO: alterar no back-und o método SAVEINTEGRANTE para se comportar corretamente independentemente da ordem de execução LOTADO/GESTOR ou GESTOR/LOTADO
    // TODO: no front-end, ao editar um integrante, bloquear o input-search de USUÁRIO
    let msg = "";
    //let novasAtribuicoes: IntegranteAtribuicao[] = (form.controls.atribuicoes.value as LookupItem[]).map(x => x.key);
    let perda = this.util.array_diff(row.atribuicoes, novasAtribuicoes).includes('GESTOR');
    let ganho = this.util.array_diff(novasAtribuicoes, row.atribuicoes).includes('GESTOR');
    if (!perda && !ganho) return ['nenhuma', -1, "", false];
    let meio = this.lookup.getValue(this.lookup.UNIDADE_INTEGRANTE_TIPO, "GESTOR") + " " + this.lex.translate("da Unidade") + " ";
    if (perda) {
      msg = row.usuario_nome?.toUpperCase() + " deixará de ser " + meio + nomeOuSigla.toUpperCase() + ".";
      return ['perda', -1, msg, false];
    }
    let ehLotadoNestaUnidade = row.atribuicoes.includes("LOTADO");
    msg = row.usuario_nome?.toUpperCase() + " passará a ser " + meio + nomeOuSigla.toUpperCase();
    let itemAntigoGestor = itensGrid.find(i => i.atribuicoes.includes('GESTOR'));
    msg = (itemAntigoGestor?.id.length ? msg + " em substituição a " + itemAntigoGestor.usuario_nome?.toUpperCase() : msg) + ". ";
    let indiceItemLotacao = itensGrid.findIndex((item, index, obj) => item.atribuicoes.includes('LOTADO'));
    if (!ehLotadoNestaUnidade && indiceItemLotacao >= 0) msg += "Como é lotado em outra unidade, a lotação de " + row.usuario_nome?.toUpperCase() + " será alterada para " + this.lex.translate("a Unidade") + " - " + nomeOuSigla.toUpperCase() + ".";
    return itemAntigoGestor?.id.length ? ['troca', itensGrid.findIndex(x => x.id == itemAntigoGestor?.id), msg, true] : ['ganho', -1, msg, !ehLotadoNestaUnidade];
  }

  /**
   * Retorna um array com as seguintes informações, nessa ordem: 
   * [booleano indicando se haverá ou não alteração de lotação do servidor, índice do grid relativo à lotação anterior, mensagem para a caixa de diálogo, mensagem para a caixa de alerta].
   * @param form              Formulário com novas informações, provenientes da edição/inclusão
   * @param row               Dados originais do vínculo que está sendo editado/incluído
   * @param itensGrid         Array com todos os vínculos originais
   * @param nomeOuSigla       Identificação do objeto (Usuário ou Unidade) ao qual estão vinculados os itens do grid
   */
  public haAlteracaoLotacao(form: FormGroup, row: IntegranteConsolidado, itensGrid: IntegranteConsolidado[], nomeOuSigla: string): [boolean, number, string, string] {
    let novasAtribuicoes: IntegranteAtribuicao[] = (form!.controls.atribuicoes.value as LookupItem[]).map(x => x.key)
    let indiceItemLotacao = itensGrid.findIndex((item, index, obj) => item.atribuicoes.includes('LOTADO'));
    if (!novasAtribuicoes.includes('LOTADO') || indiceItemLotacao == -1) return [false, -1, "", ""];
    let msgFormUsuario = this.lex.translate("A lotação") + " de " + nomeOuSigla.toUpperCase() + " passará de " + itensGrid[indiceItemLotacao].unidade_sigla?.toUpperCase() + " para " + row.unidade_sigla?.toUpperCase() + ".";
    let msgConfirmacao = "Não é possível alterar a lotação de " + nomeOuSigla.toUpperCase() + " porque é Chefe da sua atual unidade de lotação - " + itensGrid[indiceItemLotacao].unidade_sigla?.toUpperCase() + ".";
    return (form.controls.unidade_id.value != itensGrid[indiceItemLotacao].unidade_id) ? [true, indiceItemLotacao, msgFormUsuario, msgConfirmacao] : [false, -1, "", ""];
  }

  /**
   * 
   * @param atribuicoes 
   * @param atribuicao 
   * @returns 
   */
  public inserirAtribuicao(atribuicoes: LookupItem[], atribuicao: IntegranteAtribuicao): LookupItem[] {
    let novoItem = this.lookup.getLookup(this.lookup.UNIDADE_INTEGRANTE_TIPO, atribuicao);
    if (novoItem) atribuicoes.push(novoItem);
    return this.lookup.uniqueLookupItem(atribuicoes);
  }

  /**
   * 
   * @param items 
   * @returns 
   */
  public ordenarIntegrantes(items: IntegranteConsolidado[]): IntegranteConsolidado[] {
    items.sort((a, b) => {
      let x = (a.usuario_nome || a.unidade_nome)?.toLowerCase();
      let y = (b.usuario_nome || b.unidade_nome)?.toLowerCase();
      return x! < y! ? -1 : (x! > y! ? 1 : 0)
    });
    items.forEach(item => { item.atribuicoes.sort(); });
    return items;
  }

  /**
   * 
   * @param base 
   * @param unidade_id 
   * @param usuario_id 
   * @param atribuicoes 
   * @returns 
   */
  public completarIntegrante(base: any, unidadeId: string, usuarioId: string, atribuicoes: IntegranteAtribuicao[]): IntegranteConsolidado {
    let obj = { 'unidade_id': unidadeId, 'usuario_id': usuarioId, 'atribuicoes': atribuicoes };
    return Object.assign({}, base, obj);
  }

  /**
   * 
   * @param atribuicao 
   * @param noPersist 
   * @returns 
   */
  public ehPermitidoApagar(atribuicao: string): boolean {
    let proibicoes = ["LOTADO"];
    let permitidoApagar = !proibicoes.includes(atribuicao);
    let msg = atribuicao == "LOTADO" ? "A lotação do servidor não pode ser apagada. Para alterá-la, lote-o em outra Unidade." : "";
    (async () => {
      if (!permitidoApagar) await this.dialog.alert("NÃO PERMITIDO!", msg);
    })();
    return permitidoApagar;
  }

  /**
   * 
   * @param dados 
   * @param atribuicoes 
   * @param entity 
   * @returns 
   */
  public substituirItem(dados: any, atribuicoes: IntegranteAtribuicao[], entity: Usuario | Unidade): any[] { 
    let index = dados.itens.findIndex((x: { [x: string]: any; }) => x["id"] == dados.id);
    let entityUsuario = entity instanceof Usuario;
    //let entityUsuario = entity.hasOwnProperty('cpf');
    let base = entityUsuario ? { id: dados.id, unidade_sigla: dados.apelidoOuSigla, unidade_nome: dados.nome, unidade_codigo: dados.codigo } : { id: dados.id, usuario_apelido: dados.apelidoOuSigla, usuario_nome: dados.nome };   
    dados.itens[index!] = this.completarIntegrante(base, entityUsuario ? dados.id : entity.id, entityUsuario ? entity.id : dados.id, atribuicoes); 
    return dados.itens;
  }
}