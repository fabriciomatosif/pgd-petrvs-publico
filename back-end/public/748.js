"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[748],{5748:(j,h,l)=>{l.r(h),l.d(h,{EntregaModule:()=>_});var r=l(6733),y=l(2133),I=l(2662),v=l(5579),u=l(1391),d=l(2314),T=l(8239),p=l(4040),g=l(7465),O=l(4368);class c extends O.X{constructor(s){super(),this.nome="",this.descricao="",this.tipo_indicador="PORCENTAGEM",this.lista_qualitativos=[],this.etiquetas=[],this.checklist=[],this.unidade_id=null,this.initialization(s)}}var A=l(1184),E=l(1214),t=l(755),C=l(2392),Z=l(4508),b=l(4603),q=l(7819);const F=["itemQualitativo"];function N(a,s){if(1&a&&(t.TgZ(0,"div",6)(1,"div",7)(2,"label",8),t._uU(3,"\xa0"),t.qZA(),t.TgZ(4,"input-multiselect",9),t._UZ(5,"input-text",10),t.qZA()()()),2&a){const o=t.oxw();t.xp6(4),t.Q6J("addItemHandle",o.addItemHandleItemQualitativo.bind(o)),t.xp6(1),t.uIk("maxlength",250)}}let m=(()=>{class a extends A.F{constructor(o){super(o,c,g.y),this.injector=o,this.listaQualitativos=[],this.etiquetas=[],this.checklist=[],this.validate=(i,e)=>{let n=null;return["nome","tipo_indicador","descricao"].indexOf(e)>=0&&!i.value?.length&&(n="Obrigat\xf3rio"),n},this.formValidation=i=>{let e=null;return"QUALITATIVO"==this.form?.controls.tipo_indicador.value&&!this.form?.controls.lista_qualitativos.value.length&&(e="Quando o tipo da entrega for Qualitativo, \xe9 necess\xe1ria a inclus\xe3o de ao menos um item de qualitativo!"),e},this.titleEdit=i=>"Editando "+this.lex.translate("Entrega")+": "+(i?.nome||""),this.unidadeDao=o.get(E.J),this.modalWidth=900,this.title="Inclus\xe3o de "+this.lex.translate("Entregas"),this.join=["unidade"],this.form=this.fh.FormBuilder({nome:{default:""},descricao:{default:""},tipo_indicador:{default:""},qualitativo:{default:""},lista_qualitativos:{default:[]},item_qualitativo:{default:""},unidade_id:{default:null},etiquetas:{default:[]},checklist:{default:[]},etiqueta_texto:{default:""},etiqueta_icone:{default:null},etiqueta_cor:{default:null}},this.cdRef,this.validate),this.formChecklist=this.fh.FormBuilder({id:{default:""},texto:{default:""},checked:{default:!1}},this.cdRef)}loadData(o,i){let e=Object.assign({},i.value);i.patchValue(this.util.fillForm(e,o)),this.loadListaQualitativos()}initializeData(o){o.patchValue(new c)}saveData(o){var i=this;return(0,T.Z)(function*(){return new Promise((e,n)=>{const f=i.util.fill(new c,i.entity);e(i.util.fillForm(f,i.form.value))})})()}incluirQualitativo(o){let i=o.trim().replace(" ","%"),e=this.form.controls.lista_qualitativos.value;!e.find(n=>n==i)&&i.length&&(this.clearErros(),e.push(i),this.form.controls.lista_qualitativos.setValue(e),this.form?.controls.qualitativo.setValue(""),this.loadListaQualitativos())}excluirQualitativo(o){let i=this.form.controls.lista_qualitativos.value;i.find(e=>e==o)&&(this.form.controls.lista_qualitativos.setValue(i.filter(e=>e!=o)),this.loadListaQualitativos())}loadListaQualitativos(){this.listaQualitativos=this.form.controls.lista_qualitativos.value||[]}addItemHandleItemQualitativo(){let o;const i=this.form.controls.item_qualitativo.value,e=this.util.onlyAlphanumeric(i).toUpperCase();return i?.length&&this.util.validateLookupItem(this.form.controls.lista_qualitativos.value,e)&&(o={key:e,value:this.form.controls.item_qualitativo.value},this.form.controls.item_qualitativo.setValue("")),o}addItemHandleEtiquetas(){let o;const i=this.form.controls.etiqueta_texto.value,e=this.util.textHash(i);return i?.length&&this.util.validateLookupItem(this.form.controls.etiquetas.value,e)&&(o={key:e,value:this.form.controls.etiqueta_texto.value,color:this.form.controls.etiqueta_cor.value,icon:this.form.controls.etiqueta_icone.value},this.form.controls.etiqueta_texto.setValue(""),this.form.controls.etiqueta_icone.setValue(null),this.form.controls.etiqueta_cor.setValue(null)),o}static#t=this.\u0275fac=function(i){return new(i||a)(t.Y36(t.zs3))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-entrega-form"]],viewQuery:function(i,e){if(1&i&&(t.Gf(p.Q,5),t.Gf(F,5)),2&i){let n;t.iGM(n=t.CRH())&&(e.editableForm=n.first),t.iGM(n=t.CRH())&&(e.itemQualitativo=n.first)}},features:[t.qOj],decls:8,vars:13,consts:[["initialFocus","nome",3,"form","disabled","title","submit","cancel"],[1,"row"],["controlName","nome","required","",3,"size","label"],["controlName","descricao","required","",3,"size","rows","label"],["icon","bi bi-arrow-up-right-circle","controlName","tipo_indicador",3,"size","label","items"],["class","row col-6",4,"ngIf"],[1,"row","col-6"],[1,"col-12"],["for","itemQualitativo",1,"radio","control-label"],["label","Itens Qualitativos","controlName","lista_qualitativos",3,"addItemHandle"],["icon","far fa-edit","controlName","item_qualitativo"]],template:function(i,e){1&i&&(t.TgZ(0,"editable-form",0),t.NdJ("submit",function(){return e.onSaveData()})("cancel",function(){return e.onCancel()}),t.TgZ(1,"div",1)(2,"div",1),t._UZ(3,"input-text",2),t.qZA(),t.TgZ(4,"div",1),t._UZ(5,"input-textarea",3)(6,"input-select",4),t.YNc(7,N,6,2,"div",5),t.qZA()()()),2&i&&(t.Q6J("form",e.form)("disabled",e.formDisabled)("title",e.isModal?"":e.title),t.xp6(3),t.Q6J("size",12)("label","Nome "+e.lex.translate("entrega")),t.uIk("maxlength",1e3),t.xp6(2),t.Q6J("size",7)("rows",2)("label","Descri\xe7\xe3o "+e.lex.translate("entrega")),t.xp6(1),t.Q6J("size",5)("label",e.lex.translate("Tipo de indicador"))("items",e.lookup.TIPO_INDICADOR),t.xp6(1),t.Q6J("ngIf","QUALITATIVO"==(null==e.form?null:e.form.controls.tipo_indicador.value)||null))},dependencies:[r.O5,p.Q,C.m,Z.Q,b.p,q.p]})}return a})();var Q=l(3150),L=l(8509),J=l(7224),D=l(3351),M=l(5512),R=l(2704),G=l(5489);function B(a,s){1&a&&t._UZ(0,"toolbar")}function U(a,s){1&a&&t._UZ(0,"badge",11),2&a&&t.Q6J("label",s.$implicit.value)}function x(a,s){if(1&a&&(t.TgZ(0,"div",9),t.YNc(1,U,1,1,"badge",10),t.qZA()),2&a){const o=s.row;t.xp6(1),t.Q6J("ngForOf",o.lista_qualitativos)}}const z=[{path:"",component:(()=>{class a extends L.E{constructor(o){super(o,c,g.y),this.injector=o,this.filterWhere=i=>{let e=[],n=i.value;return n.nome?.length&&e.push(["nome","like","%"+n.nome.trim().replace(" ","%")+"%"]),n.tipo_indicador?.length&&e.push(["tipo_indicador","==",n.tipo_indicador]),e},this.join=["unidade:id,sigla,nome"],this.title=this.lex.translate("Modelos de Entregas"),this.code="MOD_ENTRG",this.unidadeDao=o.get(E.J),this.filter=this.fh.FormBuilder({nome:{default:""},tipo_indicador:{default:null}}),this.addOption(this.OPTION_INFORMACOES),this.addOption(this.OPTION_EXCLUIR,"MOD_ENTRG_EXCL"),this.addOption(this.OPTION_LOGS,"MOD_AUDIT_LOG")}static#t=this.\u0275fac=function(i){return new(i||a)(t.Y36(t.zs3))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-entrega-list"]],viewQuery:function(i,e){if(1&i&&t.Gf(Q.M,5),2&i){let n;t.iGM(n=t.CRH())&&(e.grid=n.first)}},features:[t.qOj],decls:11,vars:16,consts:[[3,"dao","add","title","orderBy","groupBy","join","selectable","hasAdd","hasEdit","select"],[4,"ngIf"],["title","Nome","field","nome","orderBy","nome"],["title","Descri\xe7\xe3o","field","descricao","orderBy","descricao"],["type","select","field","tipo_indicador",3,"title","items"],["title","N\xedveis",3,"template"],["columnQualitativos",""],["type","options",3,"onEdit","options"],[3,"rows"],[1,"one-per-line"],["color","light","icon","bi bi-check2-square",3,"label",4,"ngFor","ngForOf"],["color","light","icon","bi bi-check2-square",3,"label"]],template:function(i,e){if(1&i&&(t.TgZ(0,"grid",0),t.NdJ("select",function(f){return e.onSelect(f)}),t.YNc(1,B,1,0,"toolbar",1),t.TgZ(2,"columns"),t._UZ(3,"column",2)(4,"column",3)(5,"column",4),t.TgZ(6,"column",5),t.YNc(7,x,2,1,"ng-template",null,6,t.W1O),t.qZA(),t._UZ(9,"column",7),t.qZA(),t._UZ(10,"pagination",8),t.qZA()),2&i){const n=t.MAs(8);t.Q6J("dao",e.dao)("add",e.add)("title",e.isModal?"":e.title)("orderBy",e.orderBy)("groupBy",e.groupBy)("join",e.join)("selectable",e.selectable)("hasAdd",!1)("hasEdit",!1),t.xp6(1),t.Q6J("ngIf",!e.selectable),t.xp6(4),t.Q6J("title",e.lex.translate("Tipo do indicador"))("items",e.lookup.TIPO_INDICADOR),t.xp6(1),t.Q6J("template",n),t.xp6(3),t.Q6J("onEdit",e.edit)("options",e.options),t.xp6(1),t.Q6J("rows",e.rowsLimit)}},dependencies:[r.sg,r.O5,Q.M,J.a,D.b,M.n,R.Q,G.F]})}return a})(),canActivate:[u.a],resolve:{config:d.o},runGuardsAndResolvers:"always",data:{title:"Entregas"}},{path:"new",component:m,canActivate:[u.a],resolve:{config:d.o},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o de Entrega",modal:!0}},{path:":id/edit",component:m,canActivate:[u.a],resolve:{config:d.o},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o de Entrega",modal:!0}},{path:":id/consult",component:m,canActivate:[u.a],resolve:{config:d.o},runGuardsAndResolvers:"always",data:{title:"Consulta a Entrega",modal:!0}}];let V=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#e=this.\u0275mod=t.oAB({type:a});static#i=this.\u0275inj=t.cJS({imports:[v.Bz.forChild(z),v.Bz]})}return a})(),_=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#e=this.\u0275mod=t.oAB({type:a});static#i=this.\u0275inj=t.cJS({imports:[r.ez,I.K,y.UX,V]})}return a})()}}]);