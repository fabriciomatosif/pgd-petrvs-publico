"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[8887],{28887:(N,h,o)=>{o.r(h),o.d(h,{AreaAtividadeExternaModule:()=>R});var A=o(76733),M=o(58568),b=o(72133),E=o(74040),D=o(1184),F=o(64368);class v extends F.X{constructor(a){super(),this.nome="",this.ativo=1,this.initialization(a)}}var d,C=o(14710),e=o(20755);class m extends D.F{constructor(a){super(a,v,C.G),this.injector=a,this.validate=(t,i)=>{let r=null;return["nome"].indexOf(i)>=0&&!t.value?.length&&(r="Obrigat\xf3rio"),r},this.titleEdit=t=>"Editando "+(t?.nome||""),this.form=this.fh.FormBuilder({nome:{default:""},ativo:{default:!0}},this.cdRef,this.validate),this.addOption(this.OPTION_EXCLUIR,"MOD_RX_OUT_EXCL")}loadData(a,t){let i=Object.assign({},t.value);t.patchValue(this.util.fillForm(i,a))}initializeData(a){a.patchValue(new v)}saveData(a){return new Promise((t,i)=>{const r=this.util.fill(new v,this.entity);t(this.util.fillForm(r,this.form.value))})}}(d=m).\u0275fac=function(a){return new(a||d)(e.Y36(e.zs3))},d.\u0275cmp=e.Xpm({type:d,selectors:[["area-atividade-externa-form"]],viewQuery:function(a,t){if(1&a&&e.Gf(E.Q,5),2&a){let i;e.iGM(i=e.CRH())&&(t.editableForm=i.first)}},features:[e.qOj],decls:4,vars:6,consts:[["initialFocus","nome",3,"form","disabled","title","submit","cancel"],[1,"row"],["label","Nome da \xc1rea da Atividade Externa","controlName","nome","required","",3,"size"],["labelPosition","left","label","Ativo","controlName","ativo",3,"size"]],template:function(a,t){1&a&&(e.TgZ(0,"editable-form",0),e.NdJ("submit",function(){return t.onSaveData()})("cancel",function(){return t.onCancel()}),e.TgZ(1,"div",1),e._UZ(2,"input-text",2)(3,"input-switch",3),e.qZA()()),2&a&&(e.Q6J("form",t.form)("disabled",t.formDisabled)("title",t.isModal?"":t.title),e.xp6(2),e.Q6J("size",10),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",2))}});var u,g=o(73150),x=o(78509);function B(n,a){1&n&&e._UZ(0,"toolbar")}class p extends x.E{constructor(a){super(a,v,C.G),this.injector=a,this.filterWhere=t=>{let i=[],r=t.value;return r.nome_area?.length&&i.push(["nome","like","%"+r.nome.trim().replace(" ","%")+"%"]),i},this.title=this.lex.translate("\xc1reas da Atividade Externa"),this.code="MOD_RX",this.orderBy=[["nome","asc"]],this.filter=this.fh.FormBuilder({nome:{default:""}}),this.addOption(this.OPTION_EXCLUIR,"MOD_RX_OUT_EXCL")}filterClear(a){a.controls.nome.setValue(""),super.filterClear(a)}}(u=p).\u0275fac=function(a){return new(a||u)(e.Y36(e.zs3))},u.\u0275cmp=e.Xpm({type:u,selectors:[["area-atividade-externa-list"]],viewQuery:function(a,t){if(1&a&&e.Gf(g.M,5),2&a){let i;e.iGM(i=e.CRH())&&(t.grid=i.first)}},features:[e.qOj],decls:9,vars:23,consts:[[3,"dao","add","title","orderBy","groupBy","join","selectable","hasAdd","hasEdit","hasDelete","select"],[4,"ngIf"],[3,"deleted","form","where","submit","clear","collapseChange","collapsed"],[1,"row"],["label","Nome da \xc1rea da Atividade Externa","controlName","nome","placeholder","Nome da \xc1rea da Atividade Externa",3,"size","control"],["title","Nome da \xc1rea da Atividade Externa","field","nome","orderBy","nome"],["type","options",3,"onEdit"],[3,"rows"]],template:function(a,t){1&a&&(e.TgZ(0,"grid",0),e.NdJ("select",function(r){return t.onSelect(r)}),e.YNc(1,B,1,0,"toolbar",1),e.TgZ(2,"filter",2)(3,"div",3),e._UZ(4,"input-text",4),e.qZA()(),e.TgZ(5,"columns"),e._UZ(6,"column",5)(7,"column",6),e.qZA(),e._UZ(8,"pagination",7),e.qZA()),2&a&&(e.Q6J("dao",t.dao)("add",t.add)("title",t.isModal?"":t.title)("orderBy",t.orderBy)("groupBy",t.groupBy)("join",t.join)("selectable",t.selectable)("hasAdd",t.auth.hasPermissionTo("MOD_RX_OUT_INCL"))("hasEdit",t.auth.hasPermissionTo("MOD_RX_OUT_EDT"))("hasDelete",t.auth.hasPermissionTo("MOD_RX_OUT_EXCL")),e.xp6(1),e.Q6J("ngIf",!t.selectable),e.xp6(1),e.Q6J("deleted",t.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",t.filter)("where",t.filterWhere)("submit",t.filterSubmit.bind(t))("clear",t.filterClear.bind(t))("collapseChange",t.filterCollapseChange.bind(t))("collapsed",!t.selectable&&t.filterCollapsed),e.xp6(2),e.Q6J("size",12)("control",t.filter.controls.nome),e.uIk("maxlength",250),e.xp6(3),e.Q6J("onEdit",t.edit),e.xp6(1),e.Q6J("rows",t.rowsLimit))}});var l,y=o(55579),f=o(1391),c=o(2314);const Q=[{path:"",component:p,canActivate:[f.a],resolve:{config:c.o},runGuardsAndResolvers:"always",data:{title:"Lista",modal:!1}},{path:"new",component:m,canActivate:[f.a],resolve:{config:c.o},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o",modal:!0}},{path:":id/edit",component:m,canActivate:[f.a],resolve:{config:c.o},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o",modal:!0}},{path:":id/consult",component:m,canActivate:[f.a],resolve:{config:c.o},runGuardsAndResolvers:"always",data:{title:"Consultar",modal:!0}}];class O{}(l=O).\u0275fac=function(a){return new(a||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[y.Bz.forChild(Q),y.Bz]});var s,L=o(88820),T=o(92392),X=o(57224),z=o(83351),U=o(57765),Z=o(45512),J=o(42704);class R{}(s=R).\u0275fac=function(a){return new(a||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[A.ez,M.K,b.UX,O]}),e.B6R(m,[E.Q,L.a,T.m],[]),e.B6R(p,[A.O5,g.M,X.a,z.b,U.z,Z.n,J.Q,T.m],[])}}]);