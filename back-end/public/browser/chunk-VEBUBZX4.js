import{a as Z}from"./chunk-UFS3OPCG.js";import{b as $}from"./chunk-76VPKZU2.js";import{a as u,b as f}from"./chunk-RMYSPY7H.js";import{b as F,d as J,fa as te,i as K,o as Y,s as N,v as ee}from"./chunk-XHTD5OAS.js";import{b as k,c as X,d as U,e as W,h as H,s as M}from"./chunk-KODYKPWY.js";import"./chunk-ORJB5SCJ.js";import{Bb as G,Fa as s,Fb as V,Ga as p,Ha as m,La as j,Ma as g,P as C,U as v,Ua as w,V as b,Va as _,Wa as D,Xa as P,Z as z,_ as B,ba as E,h as O,ic as Q,ma as l,na as y,oc as A,pc as q,sb as R,ud as I,va as T,xa as S,ya as d,za as a}from"./chunk-6YMI2QVU.js";var c=class extends q{constructor(t){super(),this.nome="",this.icone="",this.cor="",this.descricao="",this.initialization(t)}};var x=(()=>{let t=class t extends Z{constructor(r){super(r,c,I),this.injector=r,this.validate=(i,e)=>null,this.titleEdit=i=>"Editando "+this.lex.translate("Eixo Tem\xE1tico")+": "+(i?.nome||""),this.form=this.fh.FormBuilder({nome:{default:""},icone:{default:""},cor:{default:""},descricao:{default:""}},this.cdRef,this.validate)}loadData(r,i){let e=Object.assign({},i.value);i.patchValue(this.util.fillForm(e,r))}initializeData(r){r.patchValue(new c)}saveData(r){return O(this,null,function*(){return new Promise((i,e)=>{let n=this.util.fill(new c,this.entity);i(this.util.fillForm(n,this.form.value))})})}};t.\u0275fac=function(i){return new(i||t)(y(E))},t.\u0275cmp=v({type:t,selectors:[["app-eixo-tematico-form"]],viewQuery:function(i,e){if(i&1&&w(N,5),i&2){let n;_(n=D())&&(e.editableForm=n.first)}},features:[T],decls:10,vars:12,consts:[["initialFocus","nome",3,"submit","cancel","form","disabled","title"],[1,"row"],["controlName","nome","required","",3,"size","label"],[1,"col"],["label","Descri\xE7\xE3o","controlName","descricao","required","",3,"size","rows"],["label","\xCDcone","icon","fas fa-sign-out-alt","controlName","icone","required","",3,"size","items"],["background","","label","Cor","controlName","cor","required","",3,"size"]],template:function(i,e){i&1&&(s(0,"editable-form",0),g("submit",function(){return e.onSaveData()})("cancel",function(){return e.onCancel()}),s(1,"div",1)(2,"div",1),m(3,"input-text",2),p(),s(4,"div",1)(5,"div",3),m(6,"input-textarea",4),p(),s(7,"div",3),m(8,"input-select",5)(9,"input-color",6),p()()()()),i&2&&(a("form",e.form)("disabled",e.formDisabled)("title",e.isModal?"":e.title),l(3),a("size",12)("label","Nome "+e.lex.translate("do eixo tem\xE1tico")),d("maxlength",250),l(3),a("size",8)("rows",4),d("maxlength",250),l(2),a("size",3)("items",e.lookup.ICONES),l(),a("size",3))},dependencies:[N,F,Y,K,J]});let o=t;return o})();function ae(o,t){o&1&&m(0,"toolbar")}function le(o,t){if(o&1&&m(0,"badge",9),o&2){let h=t.row;a("color",h.cor)("icon",h.icone)("label",h.nome)("hint",h.nome)}}var ie=(()=>{let t=class t extends ${constructor(r){super(r,c,I),this.injector=r,this.filterWhere=i=>{let e=[],n=i.value;return n.nome?.length&&e.push(["nome","like","%"+n.nome.trim().replace(" ","%")+"%"]),e},this.title=this.lex.translate("Eixos Tem\xE1ticos"),this.orderBy=[["nome","asc"]],this.filter=this.fh.FormBuilder({nome:{default:""}}),this.auth.hasPermissionTo("MOD_EXTM")&&this.options.push({icon:"bi bi-info-circle",label:"Informa\xE7\xF5es",onClick:this.consult.bind(this)}),this.auth.hasPermissionTo("MOD_EXTM_EXCL")&&this.options.push({icon:"bi bi-trash",label:"Excluir",onClick:this.delete.bind(this)}),this.addOption(this.OPTION_LOGS,"MOD_AUDIT_LOG")}filterClear(r){r.controls.nome.setValue(""),super.filterClear(r)}};t.\u0275fac=function(i){return new(i||t)(y(E))},t.\u0275cmp=v({type:t,selectors:[["app-eixo-tematico-list"]],viewQuery:function(i,e){if(i&1&&w(M,5),i&2){let n;_(n=D())&&(e.grid=n.first)}},features:[T],decls:11,vars:24,consts:[["columnNome",""],[3,"select","dao","add","title","hasAdd","hasEdit","selectable","orderBy"],[4,"ngIf"],[3,"deleted","form","where","submit","clear","collapseChange","collapsed"],[1,"row"],["controlName","nome",3,"size","label","control","placeholder"],["title","Nome","orderBy","nome",3,"template"],["type","options",3,"onEdit","options"],[3,"rows"],[3,"color","icon","label","hint"]],template:function(i,e){if(i&1){let n=j();s(0,"grid",1),g("select",function(re){return z(n),B(e.onSelect(re))}),S(1,ae,1,0,"toolbar",2),s(2,"filter",3)(3,"div",4),m(4,"input-text",5),p()(),s(5,"columns")(6,"column",6),S(7,le,1,4,"ng-template",null,0,R),p(),m(9,"column",7),p(),m(10,"pagination",8),p()}if(i&2){let n=P(8);a("dao",e.dao)("add",e.add)("title",e.isModal?"":e.title)("hasAdd",e.auth.hasPermissionTo("MOD_EXTM_INCL"))("hasEdit",e.auth.hasPermissionTo("MOD_EXTM_EDT"))("selectable",e.selectable)("orderBy",e.orderBy),l(),a("ngIf",!e.selectable),l(),a("deleted",e.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",e.filter)("where",e.filterWhere)("submit",e.filterSubmit.bind(e))("clear",e.filterClear.bind(e))("collapseChange",e.filterCollapseChange.bind(e))("collapsed",!e.selectable&&e.filterCollapsed),l(2),a("size",12)("label",e.lex.translate("Eixo tem\xE1tico"))("control",e.filter.controls.nome)("placeholder","Nome "+e.lex.translate("eixo tem\xE1tico")+"..."),d("maxlength",250),l(2),a("template",n),l(3),a("onEdit",e.edit)("options",e.options),l(),a("rows",e.rowsLimit)}},dependencies:[G,M,U,X,W,k,H,F,ee]});let o=t;return o})();var me=[{path:"",component:ie,canActivate:[u],resolve:{config:f},runGuardsAndResolvers:"always",data:{title:"Eixos Tem\xE1ticos"}},{path:"new",component:x,canActivate:[u],resolve:{config:f},runGuardsAndResolvers:"always",data:{title:"Incluir Eixo Tem\xE1tico",modal:!0}},{path:":id/edit",component:x,canActivate:[u],resolve:{config:f},runGuardsAndResolvers:"always",data:{title:"Editar Eixo Tem\xE1tico",modal:!0}},{path:":id/consult",component:x,canActivate:[u],resolve:{config:f},runGuardsAndResolvers:"always",data:{title:"Consultar Eixo Tem\xE1tico",modal:!0}}],oe=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=b({type:t}),t.\u0275inj=C({imports:[A.forChild(me),A]});let o=t;return o})();var Je=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=b({type:t}),t.\u0275inj=C({imports:[V,te,Q,oe]});let o=t;return o})();export{Je as EixoTematicoModule};