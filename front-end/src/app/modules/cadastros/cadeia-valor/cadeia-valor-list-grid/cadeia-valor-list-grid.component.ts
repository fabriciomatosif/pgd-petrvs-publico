import { Component, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRouteSnapshot } from '@angular/router';
import { GridComponent } from 'src/app/components/grid/grid.component';
import { InputSearchComponent } from 'src/app/components/input/input-search/input-search.component';
import { CadeiaValorDaoService } from 'src/app/dao/cadeia-valor-dao.service';
import { PlanejamentoDaoService } from 'src/app/dao/planejamento-dao.service';
import { UnidadeDaoService } from 'src/app/dao/unidade-dao.service';
import { CadeiaValor } from 'src/app/models/cadeia-valor.model';
import { Planejamento } from 'src/app/models/planejamento.model';
import { PageListBase } from 'src/app/modules/base/page-list-base';

@Component({
  selector: 'cadeia-valor-list-grid',
  templateUrl: './cadeia-valor-list-grid.component.html',
  styleUrls: ['./cadeia-valor-list-grid.component.scss']
})
export class CadeiaValorListGridComponent  extends PageListBase<CadeiaValor, CadeiaValorDaoService>{
  // @Input() snapshot?: ActivatedRouteSnapshot;
  @ViewChild(GridComponent, { static: false }) public grid?: GridComponent;
  @ViewChild('unidade', { static: false }) public unidade?: InputSearchComponent;
  @Input() snapshot?: ActivatedRouteSnapshot;
  @Input() fixedFilter?: any[];
  
  public unidadeDao: UnidadeDaoService;

  constructor(public injector: Injector) {
    super(injector, CadeiaValor, CadeiaValorDaoService);
    this.unidadeDao = injector.get<UnidadeDaoService>(UnidadeDaoService);
    /* Inicializações */
    this.filter = this.fh.FormBuilder({
      inicio: {default: null},
      fim: {default: null},
      nome: {default: ""},
      unidade_id: {default: null}
     });
     this.join = ['unidade'];
    // Testa se o usuário possui permissão para exibir planos de gestão/entregas
    if (this.auth.hasPermissionTo("MOD_PGENTR_CONS")) {
      this.options.push({
        icon: "bi bi-info-circle",
        label: "Informações",
        onClick: this.consult.bind(this)
      });
    }
    // Testa se o usuário possui permissão para excluir planos de gestão/entregas
    if (this.auth.hasPermissionTo("MOD_PGENTR_EXCL")) {
      this.options.push({
        icon: "bi bi-trash",
        label: "Excluir",
        onClick: this.delete.bind(this)
      });
    }
  }

  public filterClear(filter: FormGroup) {
    filter.controls.nome.setValue("");
    filter.controls.inicio.setValue(null);
    filter.controls.fim.setValue(null);
    filter.controls.unidade_id.setValue(null);
    super.filterClear(filter);
  }

  public filterWhere = (filter: FormGroup) => {
    let result: any[] = [];
    let form: any = filter.value;

    if(form.nome?.length) {
      result.push(["nome", "like", "%" + form.nome + "%"]);
    }
    if(form.inicio) {
      result.push(["inicio", ">=", form.inicio]);
    }
    if(form.fim) {
      result.push(["fim", "<=", form.fim]);
    }
    if(form.unidade_id?.length) {
      result.push(["unidade_id", "==", form.unidade_id]);
    }

    return result;
  }

}