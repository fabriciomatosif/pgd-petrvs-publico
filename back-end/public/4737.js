"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[4737],{84737:(U,p,o)=>{o.r(p),o.d(p,{CidadeModule:()=>c});var f=o(76733),h=o(55579),n=o(1391),d=o(2314),v=o(74040),g=o(20497),I=o(64368);class r extends I.X{constructor(a){super(),this.codigo_ibge="",this.nome="",this.tipo="MUNICIPIO",this.uf="AC",this.timezone=0,this.initialization(a)}}var T=o(1184),e=o(20755),C=o(92392),z=o(64603);class s extends T.F{constructor(a){super(a,r,g.l),this.injector=a,this.validate=(i,t)=>{let l=null;return["codigo_ibge","nome","uf"].indexOf(t)>=0&&!i.value?.length?l="Obrigat\xf3rio":["timezone"].indexOf(t)>=0&&!i.value&&(l="Valor n\xe3o pode ser zero."),l},this.titleEdit=i=>"Editando "+this.lex.translate("Cidade")+": "+(i?.nome||""),this.form=this.fh.FormBuilder({codigo_ibge:{default:""},nome:{default:""},tipo:{default:""},uf:{default:""},timezone:{default:""}},this.cdRef,this.validate)}loadData(a,i){let t=Object.assign({},i.value);i.patchValue(this.util.fillForm(t,a))}initializeData(a){a.patchValue(new r)}saveData(a){return new Promise((i,t)=>{const l=this.util.fill(new r,this.entity);i(this.util.fillForm(l,this.form.value))})}static#e=this.\u0275fac=function(i){return new(i||s)(e.Y36(e.zs3))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-cidade-form"]],viewQuery:function(i,t){if(1&i&&e.Gf(v.Q,5),2&i){let l;e.iGM(l=e.CRH())&&(t.editableForm=l.first)}},features:[e.qOj],decls:9,vars:13,consts:[["initialFocus","codigo_ibge",3,"form","disabled","title","submit","cancel"],[1,"row"],["label","C\xf3digo IBGE","icon","bi bi-upc","controlName","codigo_ibge","required","",3,"size"],["label","Nome","controlName","nome","required","",3,"size"],["label","Tipo","icon","bi bi-arrow-up-right-circle","controlName","tipo",3,"size","items"],["label","UF","icon","bi bi-flag","controlName","uf",3,"size","items"],["label","Timezone","icon","bi bi-alarm","controlName","timezone","required","",3,"size","items"]],template:function(i,t){1&i&&(e.TgZ(0,"editable-form",0),e.NdJ("submit",function(){return t.onSaveData()})("cancel",function(){return t.onCancel()}),e.TgZ(1,"div",1)(2,"div",1),e._UZ(3,"input-text",2)(4,"input-text",3),e.qZA(),e.TgZ(5,"div",1),e._UZ(6,"input-select",4)(7,"input-select",5)(8,"input-select",6),e.qZA()()()),2&i&&(e.Q6J("form",t.form)("disabled",t.formDisabled)("title",t.isModal?"":t.title),e.xp6(3),e.Q6J("size",3),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",9),e.uIk("maxlength",250),e.xp6(2),e.Q6J("size",4)("items",t.lookup.TIPO_CIDADE),e.xp6(1),e.Q6J("size",4)("items",t.lookup.UF),e.xp6(1),e.Q6J("size",4)("items",t.lookup.TIMEZONE))},dependencies:[v.Q,C.m,z.p]})}var b=o(73150),y=o(78509),A=o(57224),D=o(83351),E=o(57765),F=o(45512),Q=o(42704);function N(O,a){1&O&&e._UZ(0,"toolbar")}class m extends y.E{constructor(a){super(a,r,g.l),this.injector=a,this.filterWhere=i=>{let t=[],l=i.value;return l.nome?.length&&t.push(["nome","like","%"+l.nome.trim().replace(" ","%")+"%"]),t},this.title=this.lex.translate("Cidades"),this.code="MOD_CID",this.filter=this.fh.FormBuilder({nome:{default:""}}),this.addOption(this.OPTION_INFORMACOES),this.addOption(this.OPTION_EXCLUIR,"MOD_CID_EXCL"),this.addOption(this.OPTION_LOGS,"MOD_AUDIT_LOG")}static#e=this.\u0275fac=function(i){return new(i||m)(e.Y36(e.zs3))};static#t=this.\u0275cmp=e.Xpm({type:m,selectors:[["app-cidade-list"]],viewQuery:function(i,t){if(1&i&&e.Gf(b.M,5),2&i){let l;e.iGM(l=e.CRH())&&(t.grid=l.first)}},features:[e.qOj],decls:13,vars:26,consts:[[3,"dao","add","title","orderBy","groupBy","join","selectable","hasAdd","hasEdit","select"],[4,"ngIf"],[3,"deleted","form","where","submit","collapseChange","collapsed"],[1,"row"],["controlName","nome",3,"size","label","control","placeholder"],["title","C\xf3digo IBGE","field","codigo_ibge"],["title","Nome","field","nome","orderBy","nome"],["title","UF","field","uf"],["title","Tipo","type","select","field","tipo",3,"items"],["title","Timezone","type","select","field","timezone",3,"items"],["type","options",3,"onEdit","options"],[3,"rows"]],template:function(i,t){1&i&&(e.TgZ(0,"grid",0),e.NdJ("select",function(B){return t.onSelect(B)}),e.YNc(1,N,1,0,"toolbar",1),e.TgZ(2,"filter",2)(3,"div",3),e._UZ(4,"input-text",4),e.qZA()(),e.TgZ(5,"columns"),e._UZ(6,"column",5)(7,"column",6)(8,"column",7)(9,"column",8)(10,"column",9)(11,"column",10),e.qZA(),e._UZ(12,"pagination",11),e.qZA()),2&i&&(e.Q6J("dao",t.dao)("add",t.add)("title",t.isModal?"":t.title)("orderBy",t.orderBy)("groupBy",t.groupBy)("join",t.join)("selectable",t.selectable)("hasAdd",t.auth.hasPermissionTo("MOD_CID_INCL"))("hasEdit",t.auth.hasPermissionTo("MOD_CID_EDT")),e.xp6(1),e.Q6J("ngIf",!t.selectable),e.xp6(1),e.Q6J("deleted",t.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",t.filter)("where",t.filterWhere)("submit",t.filterSubmit.bind(t))("collapseChange",t.filterCollapseChange.bind(t))("collapsed",!t.selectable&&t.filterCollapsed),e.xp6(2),e.Q6J("size",12)("label",t.lex.translate("Cidade"))("control",t.filter.controls.nome)("placeholder","Nome "+t.lex.translate("da cidade")+"..."),e.uIk("maxlength",250),e.xp6(5),e.Q6J("items",t.lookup.TIPO_CIDADE),e.xp6(1),e.Q6J("items",t.lookup.TIMEZONE),e.xp6(1),e.Q6J("onEdit",t.edit)("options",t.options),e.xp6(1),e.Q6J("rows",t.rowsLimit))},dependencies:[f.O5,b.M,A.a,D.b,E.z,F.n,Q.Q,C.m]})}const Z=[{path:"",component:m,canActivate:[n.a],resolve:{config:d.o},runGuardsAndResolvers:"always",data:{title:"Cidades"}},{path:"new",component:s,canActivate:[n.a],resolve:{config:d.o},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o de cidade",modal:!0}},{path:":id/edit",component:s,canActivate:[n.a],resolve:{config:d.o},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o de cidade",modal:!0}},{path:":id/consult",component:s,canActivate:[n.a],resolve:{config:d.o},runGuardsAndResolvers:"always",data:{title:"Consulta a cidade",modal:!0}}];class u{static#e=this.\u0275fac=function(i){return new(i||u)};static#t=this.\u0275mod=e.oAB({type:u});static#i=this.\u0275inj=e.cJS({imports:[h.Bz.forChild(Z),h.Bz]})}var J=o(54218),M=o(72133);class c{static#e=this.\u0275fac=function(i){return new(i||c)};static#t=this.\u0275mod=e.oAB({type:c});static#i=this.\u0275inj=e.cJS({imports:[f.ez,J.K,M.UX,u]})}}}]);