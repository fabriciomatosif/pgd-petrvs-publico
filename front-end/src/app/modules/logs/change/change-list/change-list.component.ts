import { Component, Injector, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GridComponent } from 'src/app/components/grid/grid.component';
import { InputSelectComponent } from 'src/app/components/input/input-select/input-select.component';
import { ToolbarButton } from 'src/app/components/toolbar/toolbar.component';
import { ChangeDaoService } from 'src/app/dao/change-dao.service';
import { UsuarioDaoService } from 'src/app/dao/usuario-dao.service';
import { EntityService } from 'src/app/services/entity.service';
import { ListenerAllPagesService } from 'src/app/listeners/listener-all-pages.service';
import { Change } from 'src/app/models/change.model';
import { PageListBase } from 'src/app/modules/base/page-list-base';
import { EntityItem } from 'src/app/services/entity.service';
import { LookupItem } from 'src/app/services/lookup.service';
import { ExcelService } from 'src/app/services/excel.service';
import { Base } from 'src/app/models/base.model';

@Component({
  selector: 'app-change-list',
  templateUrl: './change-list.component.html',
  styleUrls: ['./change-list.component.scss']
})
export class ChangeListComponent extends PageListBase<Change, ChangeDaoService> {
  @ViewChild(GridComponent, { static: false }) public grid?: GridComponent;
  @ViewChild('selectResponsaveis', { static: false }) public selectResponsaveis?: InputSelectComponent;
  @ViewChild('relacao', { static: false }) public relacao?: InputSelectComponent;

  public toolbarButtons: ToolbarButton[] = [];
  public allPages: ListenerAllPagesService;
  public usuarioDao: UsuarioDaoService;
  public entityService: EntityService;
  public entity?: EntityItem;
  public responsaveis: LookupItem[] = [];
  public relacoes: LookupItem[] = [];
  public changes: Change[] = [];


  constructor(public injector: Injector, dao: ChangeDaoService, public xlsx: ExcelService) {
    super(injector, Change, ChangeDaoService);
    this.usuarioDao = injector.get<UsuarioDaoService>(UsuarioDaoService);
    this.entityService = injector.get<EntityService>(EntityService);
    /* Inicializações */
    this.allPages = injector.get<ListenerAllPagesService>(ListenerAllPagesService);
    this.title = this.lex.translate("Logs das Alterações");
    this.filter = this.fh.FormBuilder({
      relacoes: {default: []},
      usuario_id: {default: ""},
      data_inicio: {default: ""},
      data_fim: {default: ""},
      tabela: {default: ""},
      tipo: {default: ""},
      row_id: {default: ""},
      row_id_text: {default: ""},
      row_id_search: {default: ""}
    });
    this.orderBy = [['id', 'desc']];
  }

  ngOnInit(){
    super.ngOnInit();
    this.filter?.controls.row_id_text.setValue(this.urlParams?.get('id'));
  }

  carregaResposaveis(user_ids: string[]){
    this.selectResponsaveis!.loading = true;
    this.dao?.showResponsaveis(user_ids).then(responsaveis => {
      this.responsaveis = responsaveis.map((r: any) => ({ key: r.id, value: r.nome }));
    }).finally(() => this.selectResponsaveis!.loading = false);
  }

  montaRelacoes(changes: Change[]){
    this.relacoes = changes[0]._metadata.relacoes.map((r: any) => ({key: r, value: r}));    
  }

  public async loadChanges(changes?: Base[]){
    if(changes){
      this.changes = changes as Change[];
      let user_ids = this.changes.map((change: Change) => {return change.user_id})     
      user_ids = Array.from(new Set(user_ids))
      this.carregaResposaveis(user_ids)
      if(this.changes.length > 1) this.montaRelacoes(this.changes)
    }
  }

  public onRelacaoChange(event: any) {
    const relacao = event.target.value;
    const relacoes: any[] = this.filter?.controls.relacoes.value || [];

    if (!relacoes.includes(relacao)) {
      relacoes.push(relacao);
    } else {
      const index = relacoes.indexOf(relacao);
      relacoes.splice(index, 1);
    }
    this.filter?.controls.relacoes.setValue(relacoes);
   
  }

  public filterClear(filter: FormGroup) {
    filter.controls.usuario_id.setValue("");
    filter.controls.data_inicio.setValue("");
    filter.controls.data_fim.setValue("");
    filter.controls.tabela.setValue("");
    filter.controls.tipo.setValue("");
    filter.controls.opcao_filtro.setValue("ID do registro");
    super.filterClear(filter);
  }

  public filterWhere = (filter: FormGroup) => {
    let result: any[] = [];
    let form: any = filter.value;

    if(form.usuario_id?.length){
      result.push(["user_id", "==", form.usuario_id == "null" ? null : form.usuario_id]);
    };
    if(form.data_inicio){
      result.push(["date_time", ">=", form.data_inicio]);
    };
    if(form.data_fim){
      result.push(["date_time", "<=", form.data_fim]);
    };
    if(form.tabela){
      result.push(["table_name", "==", form.tabela]);
    };
    if(form.row_id_text){
      result.push(["row_id", "==", form.row_id_text]);
    };
    if(form.row_id_search && !form.row_id_text){
      result.push(["row_id", "==", form.row_id_search]);
    };    
    if(form.tipo?.length){
      result.push(["type", "==", form.tipo]);
    };
    return result;
  }

  exportarCSV(){
    const registrosExportaveis = this.changes.map(change => {
      return {
          ...change,
          delta: JSON.stringify(change.delta)
      };
    });
    this.xlsx.exportJSON('logs', registrosExportaveis)
  }



}
