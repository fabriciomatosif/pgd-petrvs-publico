"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[4838],{44838:(X,h,a)=>{a.r(h),a.d(h,{GrupoEspecializadoModule:()=>O});var v=a(76733),A=a(58568),b=a(72133),g=a(55579),u=a(1391),p=a(2314),z=a(73150),F=a(78509),M=a(64368);class c extends M.X{constructor(t){super(),this.nome="",this.ativo=1,this.initialization(t)}}var d,E=a(51353),e=a(20755),D=a(57224),Q=a(83351),R=a(57765),Z=a(45512),B=a(42704),C=a(92392);function J(l,t){1&l&&e._UZ(0,"toolbar")}class G extends F.E{constructor(t){super(t,c,E.n),this.injector=t,this.filterWhere=o=>{let i=[],s=o.value;return s.nome?.length&&i.push(["nome","like","%"+s.nome.trim().replace(" ","%")+"%"]),i},this.title=this.lex.translate("Grupos Especializados"),this.code="MOD_RX",this.filter=this.fh.FormBuilder({nome:{default:""}}),this.addOption(this.OPTION_EXCLUIR,"MOD_RX_OUT_EXCL")}filterClear(t){t.controls.nome.setValue(""),super.filterClear(t)}}(d=G).\u0275fac=function(t){return new(t||d)(e.Y36(e.zs3))},d.\u0275cmp=e.Xpm({type:d,selectors:[["grupo-especializado-list"]],viewQuery:function(t,o){if(1&t&&e.Gf(z.M,5),2&t){let i;e.iGM(i=e.CRH())&&(o.grid=i.first)}},features:[e.qOj],decls:9,vars:23,consts:[[3,"dao","add","title","orderBy","groupBy","join","selectable","hasAdd","hasEdit","hasDelete","select"],[4,"ngIf"],[3,"deleted","form","where","submit","clear","collapseChange","collapsed"],[1,"row"],["label","Nome do Centro de Treinamento","controlName","nome","placeholder","Nome/Sigla",3,"size","control"],["title","Nome/Sigla do Grupo Especializado","field","nome","orderBy","nome"],["type","options",3,"onEdit"],[3,"rows"]],template:function(t,o){1&t&&(e.TgZ(0,"grid",0),e.NdJ("select",function(s){return o.onSelect(s)}),e.YNc(1,J,1,0,"toolbar",1),e.TgZ(2,"filter",2)(3,"div",3),e._UZ(4,"input-text",4),e.qZA()(),e.TgZ(5,"columns"),e._UZ(6,"column",5)(7,"column",6),e.qZA(),e._UZ(8,"pagination",7),e.qZA()),2&t&&(e.Q6J("dao",o.dao)("add",o.add)("title",o.isModal?"":o.title)("orderBy",o.orderBy)("groupBy",o.groupBy)("join",o.join)("selectable",o.selectable)("hasAdd",o.auth.hasPermissionTo("MOD_RX_OUT_INCL"))("hasEdit",o.auth.hasPermissionTo("MOD_RX_OUT_EDT"))("hasDelete",o.auth.hasPermissionTo("MOD_RX_OUT_EXCL")),e.xp6(1),e.Q6J("ngIf",!o.selectable),e.xp6(1),e.Q6J("deleted",o.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",o.filter)("where",o.filterWhere)("submit",o.filterSubmit.bind(o))("clear",o.filterClear.bind(o))("collapseChange",o.filterCollapseChange.bind(o))("collapsed",!o.selectable&&o.filterCollapsed),e.xp6(2),e.Q6J("size",6)("control",o.filter.controls.nome),e.uIk("maxlength",250),e.xp6(3),e.Q6J("onEdit",o.edit),e.xp6(1),e.Q6J("rows",o.rowsLimit))},dependencies:[v.O5,z.M,D.a,Q.b,R.z,Z.n,B.Q,C.m]});var m,n,y=a(74040),L=a(1184),N=a(88820);class f extends L.F{constructor(t){super(t,c,E.n),this.injector=t,this.titulos=[],this.validate=(o,i)=>{let s=null;return["nome"].indexOf(i)>=0&&!o.value?.length&&(s="Obrigat\xf3rio"),s},this.titleEdit=o=>"Editando "+(o?.nome||""),this.form=this.fh.FormBuilder({nome:{default:""},ativo:{default:!0}},this.cdRef,this.validate)}loadData(t,o){let i=Object.assign({},o.value);o.patchValue(this.util.fillForm(i,t))}initializeData(t){t.patchValue(new c)}saveData(t){return new Promise((o,i)=>{const s=this.util.fill(new c,this.entity);o(this.util.fillForm(s,this.form.value))})}}(m=f).\u0275fac=function(t){return new(t||m)(e.Y36(e.zs3))},m.\u0275cmp=e.Xpm({type:m,selectors:[["grupo-especializado-form"]],viewQuery:function(t,o){if(1&t&&e.Gf(y.Q,5),2&t){let i;e.iGM(i=e.CRH())&&(o.editableForm=i.first)}},features:[e.qOj],decls:4,vars:6,consts:[["initialFocus","nome",3,"form","disabled","title","submit","cancel"],[1,"row"],["label","Nome do Grupo Especializado","controlName","nome","required","",3,"size"],["labelPosition","left","label","Ativo","controlName","ativo",3,"size"]],template:function(t,o){1&t&&(e.TgZ(0,"editable-form",0),e.NdJ("submit",function(){return o.onSaveData()})("cancel",function(){return o.onCancel()}),e.TgZ(1,"div",1),e._UZ(2,"input-text",2)(3,"input-switch",3),e.qZA()()),2&t&&(e.Q6J("form",o.form)("disabled",o.formDisabled)("title",o.isModal?"":o.title),e.xp6(2),e.Q6J("size",10),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",2))},dependencies:[y.Q,N.a,C.m]});const U=[{path:"",component:G,canActivate:[u.a],resolve:{config:p.o},runGuardsAndResolvers:"always",data:{title:"Lista",modal:!1}},{path:"new",component:f,canActivate:[u.a],resolve:{config:p.o},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o",modal:!0}},{path:":id/edit",component:f,canActivate:[u.a],resolve:{config:p.o},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o",modal:!0}},{path:":id/consult",component:f,canActivate:[u.a],resolve:{config:p.o},runGuardsAndResolvers:"always",data:{title:"Consultar",modal:!0}}];class T{}var r;(n=T).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(U),g.Bz]});class O{}(r=O).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[v.ez,A.K,b.UX,T]})}}]);