"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[120],{1120:(he,G,r)=>{r.r(G),r.d(G,{UsuarioModule:()=>ge});var b=r(6610),_=r(1260),g=r(1620),h=r(6819),f=r(3308),E=r(1641),$=r(6867),y=r(3535),T=r(5413),v=r(3130),z=r(24),I=r(5611),O=r(4489),Y=r(4795),B=r(5723),U=r(9419),e=r(3279),N=r(2034),C=r(5852),P=r(7363),R=r(3678),M=r(1230),F=r(9209),k=r(5201);const V=["unidade"];function Q(o,u){if(1&o&&(e.j41(0,"span")(1,"strong"),e.EFF(2),e.k0s()()),2&o){const i=e.XpG();e.R7$(2),e.JRh("Servidor: "+(null==i.entity?null:i.entity.nome))}}function H(o,u){if(1&o&&e.nrm(0,"top-alert",17),2&o){const i=e.XpG();e.Y8G("message","\xc9 imposs\xedvel excluir "+i.lex.translate("a lota\xe7\xe3o")+" "+i.lex.translate("do servidor")+". Para alter\xe1-la, lote-o em outra "+i.lex.translate("unidade")+"!")}}function X(o,u){if(1&o&&(e.j41(0,"strong"),e.EFF(1),e.k0s(),e.j41(2,"span"),e.EFF(3),e.k0s(),e.nrm(4,"br"),e.j41(5,"span"),e.EFF(6),e.k0s()),2&o){const i=u.row;e.R7$(),e.JRh(i.unidade_sigla||""),e.R7$(2),e.SpI(" ",i.informal?"(Unidade Informal)":"(C\xf3digo: "+(i.unidade_codigo||"")+")",""),e.R7$(3),e.SpI("",i.unidade_nome||""," ")}}function J(o,u){if(1&o&&e.nrm(0,"input-search",18,5),2&o){const i=e.XpG(),a=e.sdS(9);e.Y8G("disabled",null!=a&&a.adding?void 0:"true")("size",12)("dao",i.unidadeDao)}}function x(o,u){if(1&o&&(e.j41(0,"div"),e.nrm(1,"badge",20)(2,"br"),e.k0s()),2&o){const i=u.$implicit,a=e.XpG(2);e.R7$(),e.Y8G("color",a.lookup.getColor(a.lookup.UNIDADE_INTEGRANTE_TIPO,i||""))("icon",a.lookup.getIcon(a.lookup.UNIDADE_INTEGRANTE_TIPO,i||""))("label",a.lookup.getValue(a.lookup.UNIDADE_INTEGRANTE_TIPO,i||""))}}function K(o,u){1&o&&e.DNE(0,x,3,3,"div",19),2&o&&e.Y8G("ngForOf",u.row.atribuicoes)}function Z(o,u){if(1&o&&(e.j41(0,"input-multiselect",21),e.nrm(1,"input-select",22),e.k0s()),2&o){const i=e.XpG();e.Y8G("size",8)("addItemHandle",i.addItemHandle.bind(i))("deleteItemHandle",i.deleteItemHandle.bind(i)),e.R7$(),e.Y8G("size",12)("items",i.lookup.ordenarLookupItem(i.lookup.UNIDADE_INTEGRANTE_TIPO))}}let D=(()=>{class o extends Y.g{set control(i){super.control=i}get control(){return super.control}set entity(i){super.entity=i}get entity(){return super.entity}set noPersist(i){super.noPersist=i}get noPersist(){return super.noPersist}constructor(i){super(i),this.injector=i,this.items=[],this.perfilUsuario="",this.validate=(a,t)=>{let n=null;return["unidade_id","perfil_id","atribuicoes"].includes(t)&&!a.value?.length&&(n="Obrigat\xf3rio"),"unidade_id"==t&&this.grid?.adding&&this.items.map(l=>l.id).includes(a.value)&&(n="O usu\xe1rio j\xe1 \xe9 integrante desta unidade. Edite-a, ao inv\xe9s de inclu\xed-la novamente!"),n},this.formValidation=a=>{if(this.util.array_diff(["GESTOR","GESTOR_SUBSTITUTO","GESTOR_DELEGADO"],a.controls.atribuicoes.value.map(n=>n.key)||[]).length<2)return"A um mesmo servidor s\xf3 pode ser atribu\xedda uma fun\xe7\xe3o de gestor (titular, substituto ou delegado), para uma mesma Unidade!"},this.integranteService=i.get(B.H),this.integranteDao=i.get(O.f),this.unidadeDao=i.get(y.s),this.usuarioDao=i.get(T._),this.perfilDao=i.get(U.e),this.form=this.fh.FormBuilder({unidade_id:{default:""},atribuicoes:{default:void 0},atribuicao:{default:""}},this.cdRef,this.validate),this.formPerfil=this.fh.FormBuilder({perfil_id:{default:""}},this.cdRef,this.validate)}ngOnInit(){super.ngOnInit(),this.entity=this.entity??this.metadata?.entity}ngAfterViewInit(){var i=this;(0,f.A)(function*(){yield i.loadData(i.entity||{},i.form)})()}loadData(i,a){var t=this;return(0,f.A)(function*(){if(i.id){let n=[];try{yield t.integranteDao.carregarIntegrantes("",i.id).then(l=>n=l.integrantes.filter(d=>d.atribuicoes?.length>0))}finally{t.perfilUsuario=i.perfil_id,t.formPerfil.controls.perfil_id.setValue(t.perfilUsuario),t.items=[],n.forEach(l=>t.items?.push(t.integranteService.completarIntegrante(l,l.id,i.id,l.atribuicoes))),t.items=t.integranteService.ordenarIntegrantes(t.items),t.cdRef.detectChanges(),t.grid.loading=!1}}})()}salvarPerfil(){var i=this;return(0,f.A)(function*(){i.submitting=!0,i.usuarioDao?.update(i.entity.id,{perfil_id:i.formPerfil.controls.perfil_id.value},[]).then(a=>{i.perfilUsuario=a.perfil_id,i.submitting=!1})})()}addItemHandle(){let i;const a=this.lookup.getValue(this.lookup.UNIDADE_INTEGRANTE_TIPO,this.form.controls.atribuicao.value),t=this.form.controls.atribuicao.value;return a?.length&&this.util.validateLookupItem(this.form.controls.atribuicao.value,t)&&(i={key:t,value:a,icon:this.lookup.getIcon(this.lookup.UNIDADE_INTEGRANTE_TIPO,this.form.controls.atribuicao.value),color:this.lookup.getColor(this.lookup.UNIDADE_INTEGRANTE_TIPO,this.form.controls.atribuicao.value)},this.form.controls.atribuicao.setValue("")),i}deleteItemHandle(i){return"LOTADO"!=i.key}carregarIntegrante(i,a){var t=this;return(0,f.A)(function*(){i.controls.unidade_id.setValue(t.grid?.adding?a.unidade_id:a.id),i.controls.atribuicoes.setValue(t.integranteService.converterAtribuicoes(a.atribuicoes)),i.controls.atribuicao.setValue("")})()}adicionarIntegrante(){var i=this;return(0,f.A)(function*(){return i.grid&&(i.grid.error=""),{id:i.integranteDao.generateUuid(),unidade_id:"",atribuicoes:[]}})()}removerIntegrante(i){var a=this;return(0,f.A)(function*(){if(i.atribuicoes.includes("LOTADO"))yield a.dialog.alert("IMPOSS\xcdVEL EXCLUIR !","O v\xednculo que inclui "+a.lex.translate("a lota\xe7\xe3o")+" "+a.lex.translate("do servidor")+" n\xe3o pode ser exclu\xeddo. Se deseja excluir as demais atribui\xe7\xf5es, edite o v\xednculo. Se deseja alterar "+a.lex.translate("a lota\xe7\xe3o")+", lote-o em outra "+a.lex.translate("Unidade")+".");else if(yield a.dialog.confirm("Exclui ?","Deseja realmente excluir todas as atribui\xe7\xf5es de "+a.entity.nome.toUpperCase()+" "+a.lex.translate("na unidade")+" "+i.unidade_sigla?.toUpperCase()+" ?")){let n;try{if(a.isNoPersist)return Object.assign(i,{_status:"DELETE",atribuicoes:[]}),!1;a.loading=!0,yield a.integranteDao.salvarIntegrantes([a.integranteService.completarIntegrante(i,i.id,a.entity.id,[])]).then(l=>{(n=l.find(d=>d._metadata.msg?.length)?._metadata.msg)&&a.grid&&(a.grid.error=n)}),yield a.loadData({id:a.entity.id},a.form)}finally{a.loading=!1}}return!1})()}salvarIntegrante(i,a){var t=this;return(0,f.A)(function*(){let n=t.lookup.uniqueLookupItem(i.controls.atribuicoes.value);i.controls.atribuicoes.setValue(n),t.grid&&(t.grid.error=""),t.cdRef.detectChanges();let l=t.formValidation(i);if(l)yield t.dialog.alert("IMPOSS\xcdVEL INCLUIR/ALTERAR A UNIDADE !",l);else{let d=t.grid?.items||[],m=!0,p=t.integranteService.haAlteracaoGestor(n.map(s=>s.key),Object.assign(a,{unidade_sigla:t.unidade?.selectedItem?.entity.sigla}),d,t.entity?.nome||t.parent?.form?.controls.nome.value||"");if("nenhuma"!=p[0]){if(m=yield t.dialog.confirm("CONFIRMA A ALTERA\xc7\xc3O DA CHEFIA ?",p[2]),!m)return;switch(p[0]){case"ganho":if(p[3]){let s=t.grid?.items.findIndex(c=>c.atribuicoes.includes("LOTADO"));s&&(t.grid.items[s].atribuicoes=t.grid.items[s].atribuicoes.filter(c=>"LOTADO"!=c))}break;case"troca":t.grid.items[p[1]].atribuicoes=t.grid.items[p[1]].atribuicoes.filter(s=>!["GESTOR","LOTADO"].includes(s))}n=t.integranteService.inserirAtribuicao(n,"LOTADO"),i.controls.atribuicoes.setValue(n),t.loading=!0}else{let s=t.integranteService.haAlteracaoLotacao(i,Object.assign(a,{unidade_sigla:t.unidade?.selectedItem?.entity.sigla}),d,t.entity?.nome||"");if(s[0]){if(t.grid?.items[s[1]].atribuicoes.includes("GESTOR"))return void(yield t.dialog.alert("IMPOSS\xcdVEL ALTERAR A LOTA\xc7\xc3O !",s[3]));if(m=yield t.dialog.confirm("CONFIRMA A ALTERA\xc7\xc3O DA LOTA\xc7\xc3O ?",s[2]),!m)return;t.grid.items[s[1]].atribuicoes=t.grid.items[s[1]].atribuicoes.filter(c=>"LOTADO"!=c)}}try{t.isNoPersist?(a.id=t.unidade?.selectedEntity.id,t.grid.items=t.integranteService.substituirItem({id:a.id,itens:t.grid?.items||[],apelidoOuSigla:t.unidade?.selectedItem?.entity.sigla,nome:t.unidade?.selectedItem?.entity.nome,codigo:t.unidade?.selectedItem?.entity.codigo},n.map(s=>s.key),new v.P(t.entity)),t.cdRef.detectChanges()):(yield t.integranteDao.salvarIntegrantes([t.integranteService.completarIntegrante(a,i.controls.unidade_id.value,t.entity.id,n.map(s=>s.key))]).then(s=>{let c;(c=s?.find(j=>j._metadata.msg?.length)?._metadata.msg)&&t.dialog.alert("ATEN\xc7\xc3O: ERRO!",c)}),yield t.loadData({id:t.entity.id},t.form),t.grid&&(t.grid.error=""))}catch(s){t.grid&&(t.grid.error=s),yield t.loadData({id:t.entity.id},t.form)}finally{t.loading=!1}}})()}isNoButtons(){return this.isNoPersist||this.formPerfil.controls.perfil_id.value==this.perfilUsuario?"true":void 0}static#e=this.\u0275fac=function(a){return new(a||o)(e.rXU(e.zZn))};static#t=this.\u0275cmp=e.VBU({type:o,selectors:[["usuario-integrante"]],viewQuery:function(a,t){if(1&a&&(e.GBs(I._,5),e.GBs(V,5)),2&a){let n;e.mGM(n=e.lsd())&&(t.grid=n.first),e.mGM(n=e.lsd())&&(t.unidade=n.first)}},inputs:{control:"control",entity:"entity",noPersist:"noPersist",parent:"parent"},features:[e.Vt3],decls:23,vars:23,consts:[["grid",""],["columnUnidade",""],["editUnidade",""],["columnAtribuicoes",""],["editAtribuicoes",""],["unidade",""],[4,"ngIf"],[1,"row"],[1,"col-4"],["title","",3,"submit","form","noButtons","disabled"],["controlName","perfil_id","required","",3,"disabled","label","dao"],[1,"col"],["type","warning",3,"message"],["editable","",3,"items","minHeight","form","hasDelete","add","load","remove","save"],["type","alert",3,"message",4,"ngIf"],[3,"title","template","editTemplate"],["type","options"],["type","alert",3,"message"],["label","","icon","","controlName","unidade_id",3,"disabled","size","dao"],[4,"ngFor","ngForOf"],[3,"color","icon","label"],["controlName","atribuicoes",3,"size","addItemHandle","deleteItemHandle"],["label","","icon","fas fa-sign-out-alt","controlName","atribuicao",3,"size","items"]],template:function(a,t){if(1&a){const n=e.RV6();e.DNE(0,Q,3,1,"span",6),e.j41(1,"div",7)(2,"div",8)(3,"editable-form",9),e.bIt("submit",function(){return e.eBV(n),e.Njj(t.salvarPerfil())}),e.j41(4,"div",7),e.nrm(5,"input-select",10),e.k0s()()(),e.j41(6,"div",11),e.nrm(7,"top-alert",12),e.k0s()(),e.j41(8,"grid",13,0),e.DNE(10,H,1,1,"top-alert",14),e.j41(11,"columns")(12,"column",15),e.DNE(13,X,7,3,"ng-template",null,1,e.C5r)(15,J,2,3,"ng-template",null,2,e.C5r),e.k0s(),e.j41(17,"column",15),e.DNE(18,K,1,1,"ng-template",null,3,e.C5r)(20,Z,2,5,"ng-template",null,4,e.C5r),e.k0s(),e.nrm(22,"column",16),e.k0s()()}if(2&a){const n=e.sdS(14),l=e.sdS(16),d=e.sdS(19),m=e.sdS(21);e.Y8G("ngIf",!t.isNoPersist),e.R7$(3),e.Y8G("form",t.formPerfil)("noButtons",t.isNoButtons())("disabled",t.formDisabled),e.R7$(2),e.Y8G("disabled",t.auth.hasPermissionTo("MOD_CFG_USER_PERFIL")?void 0:"true")("label",t.lex.translate("Perfil"))("dao",t.perfilDao),e.R7$(2),e.Y8G("message","Ao conceder a "+t.lex.translate("um usu\xe1rio")+" a atribui\xe7\xe3o de "+t.lookup.getValue(t.lookup.UNIDADE_INTEGRANTE_TIPO,"GESTOR")+", "+t.lookup.getValue(t.lookup.UNIDADE_INTEGRANTE_TIPO,"GESTOR_SUBSTITUTO")+" ou de "+t.lookup.getValue(t.lookup.UNIDADE_INTEGRANTE_TIPO,"GESTOR_DELEGADO")+" em "+t.lex.translate("uma unidade")+", deve lhe ser concedido tamb\xe9m "+t.lex.translate("o n\xedvel de acesso")+" correspondente."),e.R7$(),e.Y8G("items",t.items)("minHeight",500)("form",t.form)("hasDelete",!0)("add",t.adicionarIntegrante.bind(t))("load",t.carregarIntegrante.bind(t))("remove",t.removerIntegrante.bind(t))("save",t.salvarIntegrante.bind(t)),e.R7$(2),e.Y8G("ngIf",!t.isNoPersist),e.R7$(2),e.Y8G("title",t.lex.translate("Unidades"))("template",n)("editTemplate",l),e.R7$(5),e.Y8G("title",t.lex.translate("Atribui\xe7\xf5es"))("template",d)("editTemplate",m)}},dependencies:[b.Sq,b.bT,I._,N.T,C.I,E.Q,P.O,R.K,M.b,F.P,k.n]})}return o})();var S=r(16),W=r(5524),w=r(9742),q=r(2075),ee=r(6774),L=r(5825),te=r(6336);const ie=["lotacao"];let A=(()=>{class o extends z.n{constructor(i){super(i,v.P,T._),this.injector=i,this.validate=(a,t)=>{let n=null;return"cpf"==t&&!this.util.validarCPF(a.value)&&(n="Inv\xe1lido"),["data_nascimento"].indexOf(t)>=0&&!this.dao?.validDateTime(a.value)&&(n="Inv\xe1lido"),n},this.formValidation=a=>this.unidadesIntegrantes?.formPerfil.controls.perfil_id.value?.length?this.unidadesIntegrantes?.grid?.items.find((t,n,l)=>t.atribuicoes.includes("LOTADO"))?"new"!=this.action&&this.unidadesIntegrantes?.grid?.items.find((t,n,l)=>!(t.unidade_id.length&&t.usuario_id.length))?"Na aba 'Atribui\xe7\xf5es' h\xe1 "+this.lex.translate("unidade")+" com edi\xe7\xe3o n\xe3o conclu\xedda. Conclua-a antes de salvar "+this.lex.translate("o servidor")+"!":void 0:"\xc9 obrigat\xf3ria a defini\xe7\xe3o "+this.lex.translate("da unidade")+" "+this.lex.translate("de lota\xe7\xe3o")+" "+this.lex.translate("do servidor")+"! Defina-a na aba 'Atribui\xe7\xf5es'.":"\xc9 obrigat\xf3rio a defini\xe7\xe3o de um "+this.lex.translate("perfil")+" para "+this.lex.translate("o servidor")+". Utilize a aba 'Atribui\xe7\xf5es'.",this.titleEdit=a=>"Editando "+this.lex.translate("Usu\xe1rio")+": "+(a?.nome||""),this.unidadeDao=i.get(y.s),this.integranteDao=i.get(O.f),this.planoTrabalhoDao=i.get($.x),this.form=this.fh.FormBuilder({email:{default:""},nome:{default:""},cpf:{default:""},matricula:{default:""},apelido:{default:""},telefone:{default:""},uf:{default:""},sexo:{default:null},url_foto:{default:""},texto_complementar_plano:{default:""},nome_jornada:{default:""},cod_jornada:{default:""},data_nascimento:{default:null}},this.cdRef,this.validate),this.planoDataset=this.planoTrabalhoDao.dataset()}loadData(i,a){var t=this;return(0,f.A)(function*(){let n=Object.assign({},a.value);a.patchValue(t.util.fillForm(n,i)),yield t.unidadesIntegrantes?.loadData(i)})()}initializeData(i){this.entity=new v.P,this.loadData(this.entity,i)}saveData(i){var a=this;return new Promise(function(){var t=(0,f.A)(function*(n,l){a.unidadesIntegrantes.grid.confirm();let d=a.util.fill(new v.P,a.entity);d=a.util.fillForm(d,a.form.value),d.perfil_id=a.unidadesIntegrantes?.formPerfil.controls.perfil_id.value;let m=a.unidadesIntegrantes?.items||[],p=m.findIndex(s=>s.atribuicoes.includes("LOTADO"));m.forEach((s,c,j)=>{c!=p&&"DELETE"==s._status&&(s.atribuicoes=[])}),d.integrantes=m,n(d)});return function(n,l){return t.apply(this,arguments)}}())}static#e=this.\u0275fac=function(a){return new(a||o)(e.rXU(e.zZn))};static#t=this.\u0275cmp=e.VBU({type:o,selectors:[["app-usuario-form"]],viewQuery:function(a,t){if(1&a&&(e.GBs(E.Q,5),e.GBs(D,5),e.GBs(ie,5)),2&a){let n;e.mGM(n=e.lsd())&&(t.editableForm=n.first),e.mGM(n=e.lsd())&&(t.unidadesIntegrantes=n.first),e.mGM(n=e.lsd())&&(t.lotacao=n.first)}},features:[e.Vt3],decls:29,vars:36,consts:[["unidadesIntegrantes",""],["initialFocus","cpf",3,"submit","cancel","form","disabled","title"],["display","","right",""],["key","PRINCIPAL","label","Principal"],[1,"row"],[1,"form-group","col-md-3","text-center"],[1,"mt-5",3,"url","size"],[1,"form-group","col-md-9"],["label","CPF","controlName","cpf","required","",3,"disabled","size","maskFormat"],["label","Matr\xedcula","controlName","matricula","required","",3,"disabled","size"],["label","E-mail","controlName","email","textCase","lower","required","",3,"disabled","size"],["date","","label","Nascimento","noIcon","","controlName","data_nascimento",3,"size","labelInfo"],["label","Nome","controlName","nome","required","",3,"size"],["label","Apelido","controlName","apelido","required","",3,"size"],["label","Sexo","controlName","sexo",3,"size","items"],["label","UF","icon","bi bi-flag","controlName","uf",3,"size","items"],["label","Telefone","controlName","telefone",3,"size","maskFormat"],["label","Jornada","icon","bi bi-clock-history","controlName","nome_jornada",3,"size"],["label","C\xf3digo da Jornada","icon","bi bi-clock","controlName","cod_jornada",3,"size"],["key","CONFIGURACOES","label","Configura\xe7\xf5es"],["controlName","texto_complementar_plano",3,"label","dataset"],["key","ATRIBUICOES",3,"label"],["type","alert",3,"message"],["noPersist","",3,"entity"]],template:function(a,t){if(1&a){const n=e.RV6();e.j41(0,"editable-form",1),e.bIt("submit",function(){return e.eBV(n),e.Njj(t.onSaveData())})("cancel",function(){return e.eBV(n),e.Njj(t.onCancel())}),e.j41(1,"tabs",2)(2,"tab",3)(3,"div",4)(4,"div",5),e.nrm(5,"profile-picture",6),e.k0s(),e.j41(6,"div",7)(7,"div",4),e.nrm(8,"input-text",8)(9,"input-text",9)(10,"input-text",10)(11,"input-datetime",11),e.k0s(),e.j41(12,"div",4),e.nrm(13,"input-text",12)(14,"input-text",13)(15,"input-radio",14),e.k0s(),e.j41(16,"div",4),e.nrm(17,"input-select",15)(18,"input-text",16),e.k0s(),e.j41(19,"div",4),e.nrm(20,"input-text",17)(21,"input-text",18),e.k0s()()()(),e.j41(22,"tab",19)(23,"div",4),e.nrm(24,"input-editor",20),e.k0s()(),e.j41(25,"tab",21),e.nrm(26,"top-alert",22)(27,"usuario-integrante",23,0),e.k0s()()()}2&a&&(e.Y8G("form",t.form)("disabled",t.formDisabled)("title",t.isModal?"":t.title),e.R7$(5),e.Y8G("url",t.form.controls.url_foto.value)("size",150),e.R7$(3),e.Y8G("disabled",t.auth.hasPermissionTo("MOD_CFG_USER_CPF")?void 0:"true")("size",3)("maskFormat","000.000.000-00"),e.BMQ("maxlength",15),e.R7$(),e.Y8G("disabled",t.auth.hasPermissionTo("MOD_CFG_USER_MAT")?void 0:"true")("size",2),e.BMQ("maxlength",250),e.R7$(),e.Y8G("disabled",t.auth.hasPermissionTo("MOD_CFG_USER_MAIL")?void 0:"true")("size",4),e.BMQ("maxlength",250),e.R7$(),e.Y8G("size",3)("labelInfo","Data de nascimento"),e.R7$(2),e.Y8G("size",5),e.BMQ("maxlength",250),e.R7$(),e.Y8G("size",3),e.BMQ("maxlength",250),e.R7$(),e.Y8G("size",4)("items",t.lookup.SEXO),e.R7$(2),e.Y8G("size",6)("items",t.lookup.UF),e.R7$(),e.Y8G("size",6)("maskFormat","(00) 0000-0000||(00) 0 0000-0000"),e.BMQ("maxlength",250),e.R7$(2),e.Y8G("size",6),e.BMQ("maxlength",100),e.R7$(),e.Y8G("size",6),e.R7$(3),e.Y8G("label","Texto complementar "+t.lex.translate("Plano de Trabalho"))("dataset",t.planoDataset),e.R7$(),e.Y8G("label",t.lex.translate("Atribui\xe7\xf5es")),e.R7$(),e.Y8G("message","\xc9 imposs\xedvel excluir "+t.lex.translate("a lota\xe7\xe3o")+" "+t.lex.translate("do servidor")+". Para alter\xe1-la, lote-o em outra "+t.lex.translate("unidade")+"!"),e.R7$(),e.Y8G("entity",t.entity))},dependencies:[E.Q,S.H,W.r,w.t,R.K,q.O,ee.j,F.P,L.r,te.p,D]})}return o})();var ae=r(9062),ne=r(7772),oe=r(2305),re=r(6764);function se(o,u){if(1&o&&(e.j41(0,"h3",17),e.EFF(1),e.k0s()),2&o){const i=e.XpG();e.R7$(),e.JRh(i.title)}}function le(o,u){1&o&&e.nrm(0,"toolbar")}function de(o,u){if(1&o&&e.nrm(0,"profile-picture",18),2&o){const i=u.row;e.Y8G("url",i.url_foto)("size",40)("hint",i.nome)}}function ue(o,u){if(1&o&&(e.j41(0,"strong"),e.EFF(1),e.k0s()),2&o){const i=u.row;e.R7$(),e.JRh((null==i.perfil?null:i.perfil.nome)||"")}}const me=[{path:"",component:(()=>{class o extends ae.P{constructor(i){super(i,v.P,T._),this.injector=i,this.filterWhere=a=>{let t=[];return a?.controls.usuario?.value?.length&&t.push(["nome","like","%"+a?.controls.usuario?.value.trim().replace(" ","%")+"%"]),a?.controls.unidade_id?.value?.length&&t.push(["lotacao","==",a?.controls.unidade_id.value]),a?.controls.perfil_id?.value?.length&&t.push(["perfil_id","==",a?.controls.perfil_id?.value]),t},this.unidadeDao=i.get(y.s),this.perfilDao=i.get(U.e),this.title=this.lex.translate("Usu\xe1rios"),this.code="MOD_CFG_USER",this.join=["perfil:id,nome"],this.filter=this.fh.FormBuilder({usuario:{default:""},unidade_id:{default:""},perfil_id:{default:null}}),this.addOption(this.OPTION_INFORMACOES,"MOD_USER")}dynamicOptions(i){let a=[];return this.auth.hasPermissionTo("MOD_USER_ATRIB")&&a.push({label:"Atribui\xe7\xf5es",icon:"bi bi-list-task",onClick:t=>{this.go.navigate({route:["configuracoes","usuario",t.id,"integrante"]},{metadata:{entity:i}})}}),a}static#e=this.\u0275fac=function(a){return new(a||o)(e.rXU(e.zZn))};static#t=this.\u0275cmp=e.VBU({type:o,selectors:[["app-usuario-list"]],viewQuery:function(a,t){if(1&a&&e.GBs(I._,5),2&a){let n;e.mGM(n=e.lsd())&&(t.grid=n.first)}},features:[e.Vt3],decls:20,vars:35,consts:[["columnFoto",""],["columnPerfil",""],["class","my-2",4,"ngIf"],[3,"select","dao","add","orderBy","groupBy","join","selectable","hasAdd","hasEdit"],[4,"ngIf"],[3,"form","where","submit","collapseChange","collapsed"],[1,"row"],["controlName","usuario","placeholder","Nome",3,"size","label","control"],["controlName","unidade_id",3,"size","label","control","dao"],["controlName","perfil_id","nullable","",3,"size","label","control","dao"],["icon","bi-person",3,"align","template"],["title","CPF","field","cpf"],["title","Matr\xedcula","field","matricula"],["title","Nome","field","nome","orderBy","nome"],[3,"title","template"],["type","options",3,"onEdit","dynamicOptions","options"],[3,"rows"],[1,"my-2"],[3,"url","size","hint"]],template:function(a,t){if(1&a){const n=e.RV6();e.DNE(0,se,2,1,"h3",2),e.j41(1,"grid",3),e.bIt("select",function(d){return e.eBV(n),e.Njj(t.onSelect(d))}),e.DNE(2,le,1,0,"toolbar",4),e.j41(3,"filter",5)(4,"div",6),e.nrm(5,"input-text",7)(6,"input-search",8)(7,"input-select",9),e.k0s()(),e.j41(8,"columns")(9,"column",10),e.DNE(10,de,1,3,"ng-template",null,0,e.C5r),e.k0s(),e.nrm(12,"column",11)(13,"column",12)(14,"column",13),e.j41(15,"column",14),e.DNE(16,ue,2,1,"ng-template",null,1,e.C5r),e.k0s(),e.nrm(18,"column",15),e.k0s(),e.nrm(19,"pagination",16),e.k0s()}if(2&a){const n=e.sdS(11),l=e.sdS(17);e.Y8G("ngIf",!t.isModal),e.R7$(),e.Y8G("dao",t.dao)("add",t.add)("orderBy",t.orderBy)("groupBy",t.groupBy)("join",t.join)("selectable",t.selectable)("hasAdd",t.auth.hasPermissionTo("MOD_USER_INCL"))("hasEdit",t.auth.hasPermissionTo("MOD_USER_EDT")),e.R7$(),e.Y8G("ngIf",!t.selectable),e.R7$(),e.Y8G("form",t.filter)("where",t.filterWhere)("submit",t.filterSubmit.bind(t))("collapseChange",t.filterCollapseChange.bind(t))("collapsed",!t.selectable&&t.filterCollapsed),e.R7$(2),e.Y8G("size",4)("label",t.lex.translate("Usu\xe1rio"))("control",t.filter.controls.usuario),e.BMQ("maxlength",250),e.R7$(),e.Y8G("size",4)("label",t.lex.translate("Lota\xe7\xe3o"))("control",t.filter.controls.unidade_id)("dao",t.unidadeDao),e.R7$(),e.Y8G("size",4)("label",t.lex.translate("Perfil"))("control",t.filter.controls.perfil_id)("dao",t.perfilDao),e.R7$(2),e.Y8G("align","center")("template",n),e.R7$(6),e.Y8G("title",t.lex.translate("Perfil"))("template",l),e.R7$(3),e.Y8G("onEdit",t.edit)("dynamicOptions",t.dynamicOptions.bind(t))("options",t.options),e.R7$(),e.Y8G("rows",t.rowsLimit)}},dependencies:[b.bT,I._,N.T,C.I,ne.i,oe.H,re.e,P.O,S.H,R.K,L.r]})}return o})(),canActivate:[g.q],resolve:{config:h.L},runGuardsAndResolvers:"always",data:{title:"Usu\xe1rios"}},{path:"new",component:A,canActivate:[g.q],resolve:{config:h.L},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o de Usu\xe1rio",modal:!0}},{path:":id/edit",component:A,canActivate:[g.q],resolve:{config:h.L},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o de Usu\xe1rio",modal:!0}},{path:":id/consult",component:A,canActivate:[g.q],resolve:{config:h.L},runGuardsAndResolvers:"always",data:{title:"Consulta a Usu\xe1rio",modal:!0}},{path:":id/integrante",component:D,canActivate:[g.q],resolve:{config:h.L},runGuardsAndResolvers:"always",data:{title:"Atribui\xe7\xf5es do Usu\xe1rio",modal:!0}}];let ce=(()=>{class o{static#e=this.\u0275fac=function(a){return new(a||o)};static#t=this.\u0275mod=e.$C({type:o});static#i=this.\u0275inj=e.G2t({imports:[_.iI.forChild(me),_.iI]})}return o})();var fe=r(8425),pe=r(8832);let ge=(()=>{class o{static#e=this.\u0275fac=function(a){return new(a||o)};static#t=this.\u0275mod=e.$C({type:o});static#i=this.\u0275inj=e.G2t({imports:[b.MD,fe.h,pe.X1,ce]})}return o})()}}]);