import{a as $}from"./chunk-3OQ5NXFP.js";import{b as ee}from"./chunk-GEQ4G77C.js";import{a as _,b}from"./chunk-72ETMCRT.js";import{b as O,fa as ie,i as L,s as N,v as te}from"./chunk-JEWU6XZO.js";import{b as H,c as J,d as K,e as Y,h as Z,s as F}from"./chunk-OWVQDN4P.js";import"./chunk-P4ZMML75.js";import{Bb as q,Fa as m,Fb as W,Ga as c,Ha as p,La as Q,Ma as T,Na as h,P as C,U as y,Ua as A,V as E,Va as w,Wa as R,Xa as g,Ya as P,Z as U,Za as j,_ as G,ba as S,id as D,ma as l,na as I,oc as k,pc as X,sb as v,va as M,xa as f,ya as d,za as n}from"./chunk-SDCVQHKS.js";var u=class extends X{constructor(t){super(),this.tipo="MATERIAL",this.codigo=null,this.referencia=null,this.descricao="",this.unidade_medida="UNIDADE",this.initialization(t)}};var z=(()=>{let t=class t extends ${constructor(r){super(r,u,D),this.injector=r,this.validate=(o,e)=>{let a=null;return["descricao"].indexOf(e)>=0&&!o.value?.length&&(a="Obrigat\xF3rio"),a},this.titleEdit=o=>"Editando "+this.lex.translate("Material-Servi\xE7o")+": "+(o?.descricao||""),this.form=this.fh.FormBuilder({tipo:{default:"MATERIAL"},codigo:{default:null},referencia:{default:null},descricao:{default:""},unidade_medida:{default:"UNIDADE"}},this.cdRef,this.validate)}loadData(r,o){let e=Object.assign({},o.value);o.patchValue(this.util.fillForm(e,r))}initializeData(r){this.entity=new u,this.loadData(this.entity,r)}saveData(r){return new Promise((o,e)=>{let a=this.util.fill(new u,this.entity);o(this.util.fillForm(a,this.form.value))})}};t.\u0275fac=function(o){return new(o||t)(I(S))},t.\u0275cmp=y({type:t,selectors:[["app-material-servico-form"]],viewQuery:function(o,e){if(o&1&&A(N,5),o&2){let a;w(a=R())&&(e.editableForm=a.first)}},features:[M],decls:8,vars:13,consts:[["initialFocus","tipo",3,"submit","cancel","form","disabled","title"],[1,"row"],["label","Tipo","icon","bi bi-intersect","controlName","tipo",3,"size","items"],["label","C\xF3digo","icon","bi bi-upc-scan","controlName","codigo",3,"size"],["label","Refer\xEAncia","icon","bi bi-qr-code","controlName","referencia",3,"size"],["label","Descricao","controlName","descricao","required","",3,"size"],["label","Unidade","icon","bi bi-rulers","controlName","unidade_medida",3,"size","items"]],template:function(o,e){o&1&&(m(0,"editable-form",0),T("submit",function(){return e.onSaveData()})("cancel",function(){return e.onCancel()}),m(1,"div",1),p(2,"input-select",2)(3,"input-text",3)(4,"input-text",4),c(),m(5,"div",1),p(6,"input-text",5)(7,"input-select",6),c()()),o&2&&(n("form",e.form)("disabled",e.formDisabled)("title",e.isModal?"":e.title),l(2),n("size",4)("items",e.lookup.MATERIAL_SERVICO_TIPO),l(),n("size",4),d("maxlength",250),l(),n("size",4),d("maxlength",250),l(2),n("size",8),d("maxlength",250),l(),n("size",4)("items",e.lookup.MATERIAL_SERVICO_UNIDADE))},dependencies:[N,O,L]});let i=t;return i})();function se(i,t){i&1&&p(0,"toolbar")}function me(i,t){if(i&1&&p(0,"badge",18),i&2){let s=t.row,r=h();n("icon",r.lookup.getIcon(r.lookup.MATERIAL_SERVICO_TIPO,s.tipo))("label",r.lookup.getValue(r.lookup.MATERIAL_SERVICO_TIPO,s.tipo))}}function ce(i,t){if(i&1&&p(0,"badge",21),i&2){let s=h().row;n("label",s.codigo)}}function pe(i,t){if(i&1&&p(0,"badge",22),i&2){let s=h().row;n("label",s.referencia)}}function de(i,t){if(i&1&&f(0,ce,1,1,"badge",19)(1,pe,1,1,"badge",20),i&2){let s=t.row;n("ngIf",s.codigo==null?null:s.codigo.length),l(),n("ngIf",s.referencia==null?null:s.referencia.length)}}function ue(i,t){if(i&1&&(m(0,"strong"),P(1),c()),i&2){let s=t.row;l(),j(s.descricao)}}function fe(i,t){if(i&1&&(m(0,"strong"),P(1),c()),i&2){let s=t.row,r=h();l(),j(r.lookup.getValue(r.lookup.MATERIAL_SERVICO_UNIDADE,s.unidade))}}var oe=(()=>{let t=class t extends ee{constructor(r){super(r,u,D),this.injector=r,this.filterWhere=o=>{let e=[],a=o.value;return a.tipo?e.push(["tipo","==",a.tipo]):a.codigo?.length?e.push(["codigo","like","%"+a.codigo.trim().replace(" ","%")+"%"]):a.referencia?.length?e.push(["referencia","like","%"+a.referencia.trim().replace(" ","%")+"%"]):a.descricao?.length&&e.push(["descricao","like","%"+a.descricao.trim().replace(" ","%")+"%"]),e},this.title=this.lex.translate("Materiais e Servi\xE7os"),this.code="MOD_MATSRV",this.filter=this.fh.FormBuilder({tipo:{default:null},codigo:{default:""},referencia:{default:""},descricao:{default:""}}),this.addOption(this.OPTION_INFORMACOES),this.addOption(this.OPTION_EXCLUIR,"MOD_MATSRV_EXCL"),this.addOption(this.OPTION_LOGS,"MOD_AUDIT_LOG")}};t.\u0275fac=function(o){return new(o||t)(I(S))},t.\u0275cmp=y({type:t,selectors:[["app-material-servico-list"]],viewQuery:function(o,e){if(o&1&&A(F,5),o&2){let a;w(a=R())&&(e.grid=a.first)}},features:[M],decls:24,vars:36,consts:[["columnTipo",""],["columnCodigoReferencia",""],["columnDescricao",""],["columnUnidade",""],[3,"select","dao","add","title","orderBy","groupBy","join","selectable","hasAdd","hasEdit"],[4,"ngIf"],[3,"deleted","form","where","submit","collapseChange","collapsed"],[1,"row"],["label","Tipo","itemTodos","- Todos -","controlName","tipo",3,"size","valueTodos","control","items"],["label","C\xF3digo","controlName","codigo",3,"size","control"],["label","Refer\xEAncia","controlName","referencia",3,"size","control"],["label","Descri\xE7\xE3o","controlName","descricao",3,"size","control"],["title","Tipo",3,"template"],["title","C\xF3d./Ref.",3,"template"],["title","Descri\xE7\xE3o",3,"template"],["title","Unidades",3,"template"],["type","options",3,"onEdit","options"],[3,"rows"],["color","light",3,"icon","label"],["color","light","icon","bi bi-upc-scan","hint","C\xF3digo",3,"label",4,"ngIf"],["color","light","icon","bi bi-qr-code","hint","Refer\xEAncia",3,"label",4,"ngIf"],["color","light","icon","bi bi-upc-scan","hint","C\xF3digo",3,"label"],["color","light","icon","bi bi-qr-code","hint","Refer\xEAncia",3,"label"]],template:function(o,e){if(o&1){let a=Q();m(0,"grid",4),T("select",function(V){return U(a),G(e.onSelect(V))}),f(1,se,1,0,"toolbar",5),m(2,"filter",6)(3,"div",7),p(4,"input-select",8)(5,"input-text",9)(6,"input-text",10),c(),m(7,"div",7),p(8,"input-text",11),c()(),m(9,"columns")(10,"column",12),f(11,me,1,2,"ng-template",null,0,v),c(),m(13,"column",13),f(14,de,2,2,"ng-template",null,1,v),c(),m(16,"column",14),f(17,ue,2,1,"ng-template",null,2,v),c(),m(19,"column",15),f(20,fe,2,1,"ng-template",null,3,v),c(),p(22,"column",16),c(),p(23,"pagination",17),c()}if(o&2){let a=g(12),x=g(15),V=g(18),ne=g(21);n("dao",e.dao)("add",e.add)("title",e.isModal?"":e.title)("orderBy",e.orderBy)("groupBy",e.groupBy)("join",e.join)("selectable",e.selectable)("hasAdd",e.auth.hasPermissionTo("MOD_MATSRV_INCL"))("hasEdit",e.auth.hasPermissionTo("MOD_MATSRV_EDT")),l(),n("ngIf",!e.selectable),l(),n("deleted",e.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",e.filter)("where",e.filterWhere)("submit",e.filterSubmit.bind(e))("collapseChange",e.filterCollapseChange.bind(e))("collapsed",!e.selectable&&e.filterCollapsed),l(2),n("size",4)("valueTodos",null)("control",e.filter.controls.tipo)("items",e.lookup.MATERIAL_SERVICO_TIPO),l(),n("size",4)("control",e.filter.controls.codigo),d("maxlength",250),l(),n("size",4)("control",e.filter.controls.referencia),d("maxlength",250),l(2),n("size",12)("control",e.filter.controls.descricao),d("maxlength",250),l(2),n("template",a),l(3),n("template",x),l(3),n("template",V),l(3),n("template",ne),l(3),n("onEdit",e.edit)("options",e.options),l(),n("rows",e.rowsLimit)}},dependencies:[q,F,K,J,Y,H,Z,O,L,te]});let i=t;return i})();var he=[{path:"",component:oe,canActivate:[_],resolve:{config:b},runGuardsAndResolvers:"always",data:{title:"Materiais e Servi\xE7os"}},{path:"new",component:z,canActivate:[_],resolve:{config:b},runGuardsAndResolvers:"always",data:{title:"Inclus\xE3o de Material e Servi\xE7o",modal:!0}},{path:":id/edit",component:z,canActivate:[_],resolve:{config:b},runGuardsAndResolvers:"always",data:{title:"Edi\xE7\xE3o de Material e Servi\xE7o",modal:!0}},{path:":id/consult",component:z,canActivate:[_],resolve:{config:b},runGuardsAndResolvers:"always",data:{title:"Consulta a Material e Servi\xE7o",modal:!0}}],re=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=E({type:t}),t.\u0275inj=C({imports:[k.forChild(he),k]});let i=t;return i})();var Ke=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=E({type:t}),t.\u0275inj=C({imports:[W,ie,re]});let i=t;return i})();export{Ke as MaterialServicoModule};