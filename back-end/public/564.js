"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[564],{1564:(w,f,n)=>{n.r(f),n.d(f,{TipoMotivoAfastamentoModule:()=>R});var p=n(6733),h=n(5579),r=n(1391),m=n(2314),v=n(4040),g=n(4002),M=n(4368);class u extends M.X{constructor(l){super(),this.codigo=null,this.nome="",this.sigla="",this.icone="",this.cor="",this.horas=0,this.integracao=0,this.data_inicio=new Date,this.data_fim=new Date,this.situacao="S",this.calculo="",this.initialization(l)}}var C=n(1184),t=n(755),A=n(2392),b=n(8877),O=n(4603),I=n(6848);let d=(()=>{class a extends C.F{constructor(e){super(e,u,g.n),this.injector=e,this.validate=(i,o)=>{let s=null;return["nome"].indexOf(o)>=0&&!i.value?.length?s="Obrigat\xf3rio":["integracao"].indexOf(o)>=0&&1==i.value&&(s="A integra\xe7\xe3o \xe9 feita automaticamente."),s},this.titleEdit=i=>"Editando "+this.lex.translate("Tipo de Motivo de Afastamento")+": "+(i?.nome||""),this.title=this.lex.translate("Motivos de Afastamento"),this.form=this.fh.FormBuilder({codigo:{default:null},nome:{default:""},sigla:{default:""},icone:{default:""},situacao:{default:"S"},calculo:{default:this.lookup.CALCULO[0].value},cor:{default:""},horas:{default:0},data_inicio:{default:Date.now()},data_fim:{default:Date.now()},integracao:{default:0}},this.cdRef,this.validate)}checkIntegracao(){const e=!this.form?.controls.integracao.value;return e&&null!=this.form?.controls.codigo.value&&(this.form?.controls.codigo.setValue(null),this.cdRef.markForCheck()),e?"disable":void 0}loadData(e,i){let o=Object.assign({},i.value);i.patchValue(this.util.fillForm(o,e))}initializeData(e){e.patchValue(new u)}saveData(e){return new Promise((i,o)=>{const s=this.util.fill(new u,this.entity);i(this.util.fillForm(s,this.form.value))})}static#t=this.\u0275fac=function(i){return new(i||a)(t.Y36(t.zs3))};static#o=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-tipo-motivo-afastamento-form"]],viewQuery:function(i,o){if(1&i&&t.Gf(v.Q,5),2&i){let s;t.iGM(s=t.CRH())&&(o.editableForm=s.first)}},features:[t.qOj],decls:11,vars:19,consts:[["initialFocus","nome",3,"form","disabled","title","submit","cancel"],[1,"row"],["label","Descri\xe7\xe3o","controlName","nome","required","",3,"size"],["label","Integra\xe7\xe3o","controlName","integracao","labelInfo","Se esse motivo \xe9 integrado a outro sistema. ","required","",3,"size","items"],["label","C\xf3digo","controlName","codigo","labelInfo","C\xf3digo do Motivo de Afastamento vindo de outro sistema. ",3,"size","disabled"],["label","Sigla","controlName","sigla","labelInfo","Sigla do afastamento.","required","",3,"size"],["label","Formato","controlName","horas","labelInfo","Se o afastamento ser\xe1 contado em Dias ou em Horas. ",3,"size","items"],["label","C\xe1lculo","controlName","calculo","labelInfo","Tipo de c\xe1lculo que ser\xe1 usado para contabilizar as horas. ",3,"size","items"],["label","\xcdcone","controlName","icone",3,"size","items"],["label","Cor","controlName","cor",3,"size"]],template:function(i,o){1&i&&(t.TgZ(0,"editable-form",0),t.NdJ("submit",function(){return o.onSaveData()})("cancel",function(){return o.onCancel()}),t.TgZ(1,"div",1),t._UZ(2,"input-text",2)(3,"input-radio",3)(4,"input-text",4)(5,"input-text",5),t.qZA(),t.TgZ(6,"div",1),t._UZ(7,"input-radio",6)(8,"input-radio",7)(9,"input-select",8)(10,"input-color",9),t.qZA()()),2&i&&(t.Q6J("form",o.form)("disabled",o.formDisabled)("title",o.isModal?"":o.title),t.xp6(2),t.Q6J("size",5),t.uIk("maxlength",250),t.xp6(1),t.Q6J("size",2)("items",o.lookup.SIMNAO),t.xp6(1),t.Q6J("size",3)("disabled",o.checkIntegracao()),t.uIk("maxlength",250),t.xp6(1),t.Q6J("size",2),t.uIk("maxlength",250),t.xp6(2),t.Q6J("size",3)("items",o.lookup.FORMATO_HORA),t.xp6(1),t.Q6J("size",3)("items",o.lookup.CALCULO),t.xp6(1),t.Q6J("size",2)("items",o.lookup.ICONES),t.xp6(1),t.Q6J("size",4))},dependencies:[v.Q,A.m,b.f,O.p,I.z]})}return a})();var T=n(3150),Z=n(8509),z=n(7224),F=n(3351),D=n(7765),E=n(5512),Q=n(2704);function y(a,l){1&a&&t._UZ(0,"toolbar")}function J(a,l){if(1&a&&(t._UZ(0,"i"),t.TgZ(1,"span"),t._uU(2),t.qZA()),2&a){const e=l.row;t.Tol(e.icone),t.Udp("color",e.cor),t.xp6(1),t.Udp("color",e.cor),t.xp6(1),t.hij(" ",e.nome,"")}}function N(a,l){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=l.row;t.xp6(1),t.Oqu(e.horas?"Horas":"Dias")}}function L(a,l){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=l.row;t.xp6(1),t.Oqu(e.integracao?"Sim (c\xf3d. "+e.codigo+")":"N\xe3o")}}const U=[{path:"",component:(()=>{class a extends Z.E{constructor(e){super(e,u,g.n),this.injector=e,this.filterWhere=i=>{let o=[],s=i.value;return s.nome?.length&&o.push(["nome","like","%"+s.nome.trim().replace(" ","%")+"%"]),o},this.title=this.lex.translate("Motivos de Afastamento"),this.code="MOD_TIPO_MTV_AFT",this.filter=this.fh.FormBuilder({codigo:{default:null},nome:{default:""},icone:{default:""},cor:{default:""},horas:{default:""},integracao:{default:""},data_inicio:{default:""},data_fim:{default:""}}),this.auth.hasPermissionTo("MOD_TIPO_MTV_AFT")&&this.options.push({icon:"bi bi-info-circle",label:"Informa\xe7\xf5es",onClick:this.consult.bind(this)}),this.auth.hasPermissionTo("MOD_TIPO_MTV_AFT_EXCL")&&this.options.push({icon:"bi bi-trash",label:"Excluir",onClick:this.delete.bind(this)}),this.addOption(this.OPTION_LOGS,"MOD_AUDIT_LOG")}filterClear(e){e.controls.nome.setValue(""),super.filterClear(e)}static#t=this.\u0275fac=function(i){return new(i||a)(t.Y36(t.zs3))};static#o=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-tipo-motivo-afastamento-list"]],viewQuery:function(i,o){if(1&i&&t.Gf(T.M,5),2&i){let s;t.iGM(s=t.CRH())&&(o.grid=s.first)}},features:[t.qOj],decls:17,vars:27,consts:[[3,"dao","add","title","orderBy","groupBy","join","selectable","hasAdd","hasEdit","select"],[4,"ngIf"],[3,"deleted","form","where","submit","clear","collapseChange","collapsed"],[1,"row"],["controlName","nome","placeholder","Nome...",3,"size","label","control"],["title","Descri\xe7\xe3o",3,"template"],["columnDescricao",""],["title","Formato",3,"template"],["columnEmHoras",""],["title","Integrado",3,"template"],["columnIntegrado",""],["type","options",3,"onEdit","options"],[3,"rows"]],template:function(i,o){if(1&i&&(t.TgZ(0,"grid",0),t.NdJ("select",function(c){return o.onSelect(c)}),t.YNc(1,y,1,0,"toolbar",1),t.TgZ(2,"filter",2)(3,"div",3),t._UZ(4,"input-text",4),t.qZA()(),t.TgZ(5,"columns")(6,"column",5),t.YNc(7,J,3,7,"ng-template",null,6,t.W1O),t.qZA(),t.TgZ(9,"column",7),t.YNc(10,N,2,1,"ng-template",null,8,t.W1O),t.qZA(),t.TgZ(12,"column",9),t.YNc(13,L,2,1,"ng-template",null,10,t.W1O),t.qZA(),t._UZ(15,"column",11),t.qZA(),t._UZ(16,"pagination",12),t.qZA()),2&i){const s=t.MAs(8),c=t.MAs(11),j=t.MAs(14);t.Q6J("dao",o.dao)("add",o.add)("title",o.isModal?"":o.title)("orderBy",o.orderBy)("groupBy",o.groupBy)("join",o.join)("selectable",o.selectable)("hasAdd",o.auth.hasPermissionTo("MOD_TIPO_MTV_AFT_INCL"))("hasEdit",o.auth.hasPermissionTo("MOD_TIPO_MTV_AFT_EDT")),t.xp6(1),t.Q6J("ngIf",!o.selectable),t.xp6(1),t.Q6J("deleted",o.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",o.filter)("where",o.filterWhere)("submit",o.filterSubmit.bind(o))("clear",o.filterClear.bind(o))("collapseChange",o.filterCollapseChange.bind(o))("collapsed",!o.selectable&&o.filterCollapsed),t.xp6(2),t.Q6J("size",12)("label","Nome "+o.lex.translate("motivo de afastamento"))("control",o.filter.controls.nome),t.uIk("maxlength",250),t.xp6(2),t.Q6J("template",s),t.xp6(3),t.Q6J("template",c),t.xp6(3),t.Q6J("template",j),t.xp6(3),t.Q6J("onEdit",o.edit)("options",o.options),t.xp6(1),t.Q6J("rows",o.rowsLimit)}},dependencies:[p.O5,T.M,z.a,F.b,D.z,E.n,Q.Q,A.m]})}return a})(),canActivate:[r.a],resolve:{config:m.o},runGuardsAndResolvers:"always",data:{title:"Motivos de Afastamento"}},{path:"new",component:d,canActivate:[r.a],resolve:{config:m.o},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o de Motivos de Afastamento",modal:!0}},{path:":id/edit",component:d,canActivate:[r.a],resolve:{config:m.o},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o de Motivos de Afastamento",modal:!0}},{path:":id/consult",component:d,canActivate:[r.a],resolve:{config:m.o},runGuardsAndResolvers:"always",data:{title:"Consulta a Motivos de Afastamento",modal:!0}}];let S=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#o=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({imports:[h.Bz.forChild(U),h.Bz]})}return a})();var B=n(2662),P=n(2133);let R=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#o=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({imports:[p.ez,B.K,P.UX,S]})}return a})()}}]);