"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[625],{588:(qe,O,d)=>{d.r(O),d.d(O,{CadeiaValorModule:()=>Ie});var _=d(6733),S=d(2133),M=d(4575),B=d(2662),E=d(5579),g=d(1391),h=d(2314),p=d(8239),y=d(8509),f=d(3150),v=d(9478),C=d(9520),w=d(6384),e=d(755),j=d(4978),k=d(5316),N=d(1214),Z=d(7224),D=d(3351),Q=d(7765),I=d(5512),J=d(2704),q=d(8967),G=d(4495),b=d(4040),T=d(7501),A=d(6229),F=d(6298),x=d(2392),Y=d(1720);function H(a,r){if(1&a&&(e.TgZ(0,"small",10),e._uU(1),e.qZA()),2&a){const o=r.row,i=r.metadata,t=e.oxw();e.xp6(1),e.Oqu(t.getSequencia(i,o))}}function W(a,r){if(1&a&&e._UZ(0,"input-level",11),2&a){const o=e.oxw();e.Q6J("size",6)("validate",o.validateLevel)}}function K(a,r){if(1&a&&(e.TgZ(0,"strong",12),e._uU(1),e.qZA()),2&a){const o=r.row,i=r.metadata,t=e.oxw();e.Udp("margin-left",t.getNivelSequencia(i),"px"),e.xp6(1),e.Oqu(o.nome||"")}}function X(a,r){if(1&a&&e._UZ(0,"input-text",13),2&a){const o=e.oxw();e.Q6J("size",6)("control",o.form.controls.nome),e.uIk("maxlength",250)}}let L=(()=>{class a extends F.D{set noPersist(o){super.noPersist=o}get noPersist(){return super.noPersist}set control(o){super.control=o}get control(){return super.control}set entity(o){super.entity=o}get entity(){return super.entity}get items(){return this.gridControl.value||this.gridControl.setValue(new v.y),this.gridControl.value.processos||(this.gridControl.value.processos=[]),this.gridControl.value.processos}constructor(o){super(o),this.injector=o,this.validate=(i,t)=>{let n=null;return["nome"].indexOf(t)>=0&&!i.value?.length&&(n="Obrigat\xf3rio"),["nivel"].indexOf(t)>=0&&(n=this.existePai(i)),n},this.validateLevel=(i,t,n)=>{if(n.length){let s=[...i.map(l=>l.value),t.value];return this.processos(s).length==s.length}{let s=this.processos(i.map(c=>c.value));return(s.length==i.length&&s.length?this.items.filter(c=>c.processo_pai_id==s[s.length-1].id):[]).length+1>=t.value}},this.processos=i=>{let t=[];return i.reduce((n,s)=>{let l=n.find(c=>c.sequencia==s);return l?(t.push(l),this.items.filter(c=>c.processo_pai_id==l?.id)):[]},this.items.filter(n=>!n.processo_pai_id)),t},this.cdRef=o.get(e.sBO),this.dao=o.get(C.m),this.processosDao=o.get(T.k),this.form=this.fh.FormBuilder({nome:{default:""},sequencia:{default:1},nivel:{default:""}},this.cdRef,this.validate)}existePai(o){let i=null,t=o.value.split("."),n=this.items;if(t.length>1){let s=n.reduce((c,u)=>c.created_at>u.created_at?c:u),l=this.processos(t.slice(0,t.length-1));if(s.processo_pai_id){let m,c=s.processo_pai_id,u="";for(;c;){let z=this.items.find(Je=>Je.id==c);u=(z?.sequencia||"")+"."+u,c=z?.processo_pai_id||null}m=u.split("."),m.pop(),m.push((s.sequencia-1).toString()),this.JSON.stringify(t)<=this.JSON.stringify(m)&&t[t.length-1].parseInt()<=m[m.length-1].parseInt()?i="N\xedvel j\xe1 existente":t.length>m.length&&(i=l.length+1==t.length?"Adicione o n\xedvel filho pelo bot\xe3o 'Adicionar filho'":"N\xe3o existe o n\xedvel pai")}else i=l[0].id==s.id?"N\xe3o existe o n\xedvel pai":l.length+1==t.length?"Adicione o n\xedvel filho pelo bot\xe3o 'Adicionar filho'":"N\xe3o existe o n\xedvel pai"}else if(n.length>0){let s=n.reduce((l,c)=>l.created_at>c.created_at?l:c);i=t[0]<s.sequencia?"N\xedvel j\xe1 existente":t[0]>s.sequencia?"Insira o n\xedvel em sequ\xeancia num\xe9rica":null==s.processo_pai_id?null:"Adicione este n\xedvel pelo bot\xe3o 'Adicionar n\xedvel'"}return i}loadData(o,i){this.cdRef.detectChanges(),this.sortProcessos()}addChildProcesso(o,i,t){var n=this;return(0,p.Z)(function*(){let s=new A.q({id:n.dao.generateUuid(),processo_pai_id:o.id,sequencia:n.items.filter(l=>l.processo_pai_id==o.id).length+1,nome:""});n.items.push(s),n.grid.setMetadata(s,{nivel:n.getSequencia({},s)}),n.sortProcessos(),n.grid.adding=!0,yield n.grid.edit(s)})()}getSequencia(o,i){if(!o.nivel){let t=i.processo_pai_id,n="",s=[];for(;t;){s.push(t);let l=this.items.find(c=>c.id==t);n=(l?.sequencia||"")+"."+n,t=l?.processo_pai_id||null}n+=i.sequencia,o.nivel!=n&&(o.nivel=n,o.path=s),this.grid||this.sortProcessosItems()}return o.nivel}getNivelSequencia(o){return 10*(o.nivel.match(/\./g)||[]).length}sortProcessos(){this.items.sort((o,i)=>{const t=(this.grid.getMetadata(o)?.nivel||"").split(".").map(s=>("000"+s).substr(-3)).join("."),n=(this.grid.getMetadata(i)?.nivel||"").split(".").map(s=>("000"+s).substr(-3)).join(".");return t<n?-1:t>n?1:0})}sortProcessosItems(){this.items.sort((o,i)=>{let t=o.processo_pai_id?this.retornaNivel(o):o.sequencia.toString(),n=i.processo_pai_id?this.retornaNivel(i):i.sequencia.toString();const s=(t||"").split(".").map(c=>("000"+c).substr(-3)).join("."),l=(n||"").split(".").map(c=>("000"+c).substr(-3)).join(".");return s<l?-1:s>l?1:0})}retornaNivel(o){let i=o.processo_pai_id,t="";for(;i;){let n=this.items.find(s=>s.id==i);t=(n?.sequencia||"")+"."+t,i=n?.processo_pai_id||null}return t+=o.sequencia,t}addProcesso(){var o=this;return(0,p.Z)(function*(){return new A.q({id:o.dao.generateUuid(),sequencia:o.items.filter(t=>!t.processo_pai_id).length+1,nome:""})})()}loadProcesso(o,i){var t=this;return(0,p.Z)(function*(){o.controls.nivel.setValue(t.getSequencia(t.grid?.getMetadata(i),i)),o.controls.sequencia.setValue(i.sequencia),o.controls.nome.setValue(i.nome),t.cdRef.detectChanges()})()}removeProcesso(o){var i=this;return(0,p.Z)(function*(){if(yield i.dialog.confirm("Exclui ?","Deseja realmente excluir o item ?")){let n=o;return(i.items.filter(l=>l.processo_pai_id==n.id)||[]).forEach(l=>i.removeProcesso(l)),i.items.splice(i.items.findIndex(l=>l.id==n.id),1),i.isNoPersist||(yield i.processosDao?.delete(o)),!0}return!1})()}saveProcesso(o,i){var t=this;return(0,p.Z)(function*(){let n;if(t.form.markAllAsTouched(),t.form.valid){let s=o.controls.nivel.value.split("."),l=t.processos(s.slice(0,s.length-1)),c=l?.length?l[l.length-1].id:null,u=1*s[s.length-1];t.items.filter(m=>m.processo_pai_id==c&&m.sequencia>=u).forEach(m=>m.sequencia++),i.id="NEW"==i.id?t.dao.generateUuid():i.id,i.sequencia=u,i.cadeia_valor_id=t.entity?.id,i.processo_pai_id=c,i.nome=o.controls.nome.value,n=i,t.isNoPersist||(n=yield t.processosDao?.save(i))}return n})()}editEndProcesso(o){this.grid?.clearMetadata(),this.cdRef.detectChanges(),this.sortProcessos(),this.cdRef.detectChanges()}dynamicButtons(o){let i=[];return i.push({hint:"Adicionar filho",icon:"bi bi-plus-circle",onClick:this.addChildProcesso.bind(this)}),i}static#e=this.\u0275fac=function(i){return new(i||a)(e.Y36(e.zs3))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["cadeia-valor-list-processos"]],viewQuery:function(i,t){if(1&i&&(e.Gf(b.Q,5),e.Gf(f.M,5)),2&i){let n;e.iGM(n=e.CRH())&&(t.editableForm=n.first),e.iGM(n=e.CRH())&&(t.grid=n.first)}},inputs:{cdRef:"cdRef",noPersist:"noPersist",control:"control",entity:"entity"},features:[e.qOj],decls:15,vars:15,consts:[["noButtons","",3,"form","disabled"],[1,"row"],["editable","",3,"items","form","hasDelete","add","load","remove","save","editEnd"],["title","N\xedvel",3,"template","editTemplate"],["nivel",""],["editNivel",""],["title","Processos",3,"template","editTemplate"],["processo",""],["editProcesso",""],["type","options",3,"dynamicButtons"],[1,"d-block"],["controlName","nivel",3,"size","validate"],[1,"d-block","text-break","w-100"],["controlName","nome",3,"size","control"]],template:function(i,t){if(1&i&&(e.TgZ(0,"editable-form",0)(1,"div",1)(2,"grid",2)(3,"columns")(4,"column",3),e.YNc(5,H,2,1,"ng-template",null,4,e.W1O),e.YNc(7,W,1,2,"ng-template",null,5,e.W1O),e.qZA(),e.TgZ(9,"column",6),e.YNc(10,K,2,3,"ng-template",null,7,e.W1O),e.YNc(12,X,1,3,"ng-template",null,8,e.W1O),e.qZA(),e._UZ(14,"column",9),e.qZA()()()()),2&i){const n=e.MAs(6),s=e.MAs(8),l=e.MAs(11),c=e.MAs(13);e.Q6J("form",t.form)("disabled",t.formDisabled),e.xp6(2),e.Q6J("items",t.items)("form",t.form)("hasDelete",!0)("add",t.addProcesso.bind(t))("load",t.loadProcesso.bind(t))("remove",t.removeProcesso.bind(t))("save",t.saveProcesso.bind(t))("editEnd",t.editEndProcesso.bind(t)),e.xp6(2),e.Q6J("template",n)("editTemplate",s),e.xp6(5),e.Q6J("template",l)("editTemplate",c),e.xp6(5),e.Q6J("dynamicButtons",t.dynamicButtons.bind(t))}},dependencies:[f.M,Z.a,D.b,b.Q,x.m,Y.E]})}return a})();const $=["unidade"];function ee(a,r){1&a&&e._UZ(0,"toolbar")}function te(a,r){if(1&a&&(e.TgZ(0,"span",21),e._UZ(1,"i",22),e._uU(2),e.qZA()),2&a){const o=e.oxw().row;e.xp6(2),e.hij(" ",null==o?null:o.length,"")}}function oe(a,r){if(1&a&&e.YNc(0,te,3,1,"span",20),2&a){const o=r.row;e.Q6J("ngIf",null==o?null:o.length)}}function ie(a,r){if(1&a&&e._UZ(0,"cadeia-valor-list-processos",23,24),2&a){const o=r.row,i=e.oxw(2);e.Q6J("entity",o)("cdRef",i.cdRef)}}function ne(a,r){if(1&a&&(e.TgZ(0,"column",17),e.YNc(1,oe,1,1,"ng-template",null,18,e.W1O),e.YNc(3,ie,2,2,"ng-template",null,19,e.W1O),e.qZA()),2&a){const o=e.MAs(2),i=e.MAs(4),t=e.oxw();e.Q6J("align","center")("hint",t.lex.translate("Processos"))("template",o)("expandTemplate",i)}}function ae(a,r){if(1&a&&(e.TgZ(0,"span",25),e._uU(1),e.qZA()),2&a){const o=r.row;e.xp6(1),e.Oqu(o.nome)}}function se(a,r){if(1&a&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&a){const o=r.row,i=e.oxw();e.xp6(1),e.Oqu(i.dao.getDateFormatted(o.data_inicio))}}function le(a,r){if(1&a&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&a){const o=r.row,i=e.oxw();e.xp6(1),e.Oqu(i.dao.getDateFormatted(o.data_fim))}}function re(a,r){if(1&a&&e._UZ(0,"column",26),2&a){const o=e.oxw();e.Q6J("onEdit",o.edit)("options",o.options)}}let R=(()=>{class a extends y.E{constructor(o){super(o,v.y,C.m),this.injector=o,this.selectable=!1,this.filterWhere=i=>{let t=[],n=i.value;return n.unidade_id?.length&&t.push(["unidade_id","==",n.unidade_id]),n.data_inicio&&t.push(["data_fim",">=",n.data_inicio]),n.data_fim&&t.push(["data_inicio","<=",n.data_fim]),t},this.entidadeDao=o.get(k.i),this.unidadeDao=o.get(N.J),this.join=["processos"],this.code="MOD_CADV",this.filter=this.fh.FormBuilder({data_inicio:{default:null},data_fim:{default:null},unidade_id:{default:""},entidade_id:{default:null}}),this.addOption(this.OPTION_INFORMACOES),this.addOption(this.OPTION_EXCLUIR,"MOD_CADV_EXCL"),this.addOption(this.OPTION_LOGS,"MOD_AUDIT_LOG")}onChangeData(){const o=new Date(this.filter.controls.data_inicio.value).getTime();if(new Date(this.filter.controls.data_fim.value).getTime()<o){let t=new Date(o);t.setDate(t.getDate()+1),this.filter.controls.data_fim.setValue(t)}}static#e=this.\u0275fac=function(i){return new(i||a)(e.Y36(e.zs3))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["cadeia-valor-list-grid"]],viewQuery:function(i,t){if(1&i&&(e.Gf(f.M,5),e.Gf($,7)),2&i){let n;e.iGM(n=e.CRH())&&(t.grid=n.first),e.iGM(n=e.CRH())&&(t.unidade=n.first)}},inputs:{snapshot:"snapshot",fixedFilter:"fixedFilter",selectable:"selectable"},features:[e.qOj],decls:21,vars:30,consts:[[3,"dao","add","orderBy","groupBy","join","selectable","hasAdd","hasEdit","select"],[4,"ngIf"],[3,"deleted","form","where","submit","collapseChange","collapsed"],[1,"row"],["controlName","unidade_id","required","",3,"size","control","dao"],["unidade",""],["date","","label","In\xedcio","icon","bi bi-calendar-date","controlName","data_inicio",3,"size","control","labelInfo","change"],["date","","label","Fim","icon","bi bi-calendar-date","controlName","data_fim",3,"size","control","labelInfo","change"],["type","expand","icon","bi bi-boxes",3,"align","hint","template","expandTemplate",4,"ngIf"],["title","Nome","orderBy","nome",3,"template"],["columnNome",""],["title","In\xedcio",3,"template"],["columnInicio",""],["title","Fim",3,"template"],["columnFim",""],["type","options",3,"onEdit","options",4,"ngIf"],[3,"rows"],["type","expand","icon","bi bi-boxes",3,"align","hint","template","expandTemplate"],["columnProcessos",""],["columnExpandedProcessos",""],["class","badge rounded-pill bg-light text-dark",4,"ngIf"],[1,"badge","rounded-pill","bg-light","text-dark"],[1,"bi","bi-boxes"],[3,"entity","cdRef"],["processos",""],[1,"text-break","w-100"],["type","options",3,"onEdit","options"]],template:function(i,t){if(1&i&&(e.TgZ(0,"grid",0),e.NdJ("select",function(s){return t.onSelect(s)}),e.YNc(1,ee,1,0,"toolbar",1),e.TgZ(2,"filter",2)(3,"div",3),e._UZ(4,"input-search",4,5),e.TgZ(6,"input-datetime",6),e.NdJ("change",function(){return t.onChangeData()}),e.qZA(),e.TgZ(7,"input-datetime",7),e.NdJ("change",function(){return t.onChangeData()}),e.qZA()()(),e.TgZ(8,"columns"),e.YNc(9,ne,5,4,"column",8),e.TgZ(10,"column",9),e.YNc(11,ae,2,1,"ng-template",null,10,e.W1O),e.qZA(),e.TgZ(13,"column",11),e.YNc(14,se,2,1,"ng-template",null,12,e.W1O),e.qZA(),e.TgZ(16,"column",13),e.YNc(17,le,2,1,"ng-template",null,14,e.W1O),e.qZA(),e.YNc(19,re,1,2,"column",15),e.qZA(),e._UZ(20,"pagination",16),e.qZA()),2&i){const n=e.MAs(12),s=e.MAs(15),l=e.MAs(18);e.Q6J("dao",t.dao)("add",t.add)("orderBy",t.orderBy)("groupBy",t.groupBy)("join",t.join)("selectable",t.selectable)("hasAdd",t.auth.hasPermissionTo("MOD_CADV_INCL"))("hasEdit",t.auth.hasPermissionTo("MOD_CADV_EDT")),e.xp6(1),e.Q6J("ngIf",!t.selectable),e.xp6(1),e.Q6J("deleted",t.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",t.filter)("where",t.filterWhere)("submit",t.filterSubmit.bind(t))("collapseChange",t.filterCollapseChange.bind(t))("collapsed",!t.selectable&&t.filterCollapsed),e.xp6(2),e.Q6J("size",6)("control",t.filter.controls.unidade_id)("dao",t.unidadeDao),e.xp6(2),e.Q6J("size",3)("control",t.filter.controls.data_inicio)("labelInfo","In\xedcio "+t.lex.translate("cadeia de valor")),e.xp6(1),e.Q6J("size",3)("control",t.filter.controls.data_fim)("labelInfo","Fim "+t.lex.translate("cadeia de valor")),e.xp6(2),e.Q6J("ngIf",!t.selectable),e.xp6(1),e.Q6J("template",n),e.xp6(3),e.Q6J("template",s),e.xp6(3),e.Q6J("template",l),e.xp6(3),e.Q6J("ngIf",!t.selectable),e.xp6(1),e.Q6J("rows",t.rowsLimit)}},dependencies:[_.O5,f.M,Z.a,D.b,Q.z,I.n,J.Q,q.V,G.k,L]})}return a})();var de=d(4603),ce=d(8032);const pe=["cadeiaValorInstitucional"],me=["editProcessoForm"];function ue(a,r){if(1&a&&(e.TgZ(0,"editable-form",1)(1,"div",14),e._UZ(2,"input-text",15),e.qZA()()),2&a){const o=e.oxw();e.Q6J("form",o.form),e.xp6(2),e.Q6J("size",12)("label","Nome do "+o.lex.translate("processo"))("control",o.form.controls.nome),e.uIk("maxlength",250)}}const U=function(a){return{processo:a}};function fe(a,r){if(1&a){const o=e.EpF();e.TgZ(0,"div",32),e.NdJ("dndEnd",function(t){e.CHM(o);const n=e.oxw(4);return e.KtG(n.onDragEnd(t))})("dndMoved",function(){const n=e.CHM(o).$implicit,s=e.oxw().processo,l=e.oxw(3);return e.KtG(l.onDragged(n,s.children,"move"))})("dndStart",function(t){e.CHM(o);const n=e.oxw(4);return e.KtG(n.onDragStart(t))}),e.TgZ(1,"div",22)(2,"h5",17),e._uU(3),e.qZA(),e.TgZ(4,"div",33),e._UZ(5,"action-button",19),e.qZA()(),e.GkF(6,27),e.qZA()}if(2&a){const o=r.$implicit;e.oxw(2);const i=e.MAs(8),t=e.oxw(2);e.Akn("--bg:"+o.cor+";--color:black;"),e.Q6J("dndDisableIf",!t.canEdit)("dndDraggable",o),e.xp6(3),e.AsE("",o.level,". ",o.nome,""),e.xp6(2),e.Q6J("data",o)("items",t.options),e.xp6(1),e.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",e.VKq(10,U,o))}}const V=function(){return["processo"]};function _e(a,r){if(1&a){const o=e.EpF();e.TgZ(0,"div",29),e.NdJ("dndDrop",function(t){const s=e.CHM(o).processo,l=e.oxw(3);return e.KtG(l.onDrop(t,s.children))}),e.TgZ(1,"div",30)(2,"p",9),e._UZ(3,"span",23)(4,"span",24),e.qZA()(),e.YNc(5,fe,7,12,"div",31),e.qZA()}if(2&a){const o=r.processo;e.Q6J("dndDropzone",e.DdM(4,V)),e.xp6(1),e.Akn("--bg:gray;--color:black;"),e.xp6(4),e.Q6J("ngForOf",o.children)}}function ge(a,r){if(1&a){const o=e.EpF();e.TgZ(0,"div",26),e.NdJ("dndEnd",function(t){e.CHM(o);const n=e.oxw(2);return e.KtG(n.onDragEnd(t))})("dndMoved",function(){const n=e.CHM(o).$implicit,s=e.oxw().$implicit,l=e.oxw();return e.KtG(l.onDragged(n,s.children,"move"))})("dndStart",function(t){e.CHM(o);const n=e.oxw(2);return e.KtG(n.onDragStart(t))}),e.TgZ(1,"div",22)(2,"h4",17),e._uU(3),e.qZA(),e.TgZ(4,"div",18),e._UZ(5,"action-button",19),e.qZA()(),e.GkF(6,27),e.YNc(7,_e,6,5,"ng-template",null,28,e.W1O),e.qZA()}if(2&a){const o=r.$implicit,i=e.MAs(8),t=e.oxw(2);e.Akn("--bg:"+o.cor+";--color:black;"),e.Q6J("dndDisableIf",!t.canEdit)("dndDraggable",o),e.xp6(3),e.AsE("",o.level,". ",o.nome,""),e.xp6(2),e.Q6J("data",o)("items",t.options),e.xp6(1),e.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",e.VKq(10,U,o))}}function he(a,r){if(1&a){const o=e.EpF();e.TgZ(0,"div",16),e.NdJ("dndEnd",function(t){e.CHM(o);const n=e.oxw();return e.KtG(n.onDragEnd(t))})("dndMoved",function(){const n=e.CHM(o).$implicit,s=e.oxw();return e.KtG(s.onDragged(n,s.processos,"move"))})("dndStart",function(t){e.CHM(o);const n=e.oxw();return e.KtG(n.onDragStart(t))}),e.TgZ(1,"div",7)(2,"div",8)(3,"h3",17),e._uU(4),e.qZA(),e.TgZ(5,"div",18),e._UZ(6,"action-button",19),e.qZA()(),e.TgZ(7,"div",20),e.NdJ("dndDrop",function(t){const s=e.CHM(o).$implicit,l=e.oxw();return e.KtG(l.onDrop(t,s.children))}),e.TgZ(8,"div",21)(9,"div",22)(10,"p",9),e._UZ(11,"span",23)(12,"span",24),e.qZA()()(),e.YNc(13,ge,9,12,"div",25),e.qZA()()()}if(2&a){const o=r.$implicit,i=e.oxw();e.Q6J("dndDisableIf",!i.canEdit)("dndDraggable",o),e.xp6(1),e.Akn("--border-color:"+o.cor+";--bg:white;--color:black;"),e.xp6(3),e.AsE("",o.level,". ",o.nome,""),e.xp6(2),e.Q6J("data",o)("items",i.options),e.xp6(1),e.Q6J("dndDropzone",e.DdM(12,V)),e.xp6(1),e.Akn("--bg:gray;--color:black;"),e.xp6(5),e.Q6J("ngForOf",o.children)}}class ve extends A.q{constructor(r){super(),this.children=[],this.cor="#010101",this.level="",this.initialization(r)}}let Ce=(()=>{class a extends F.D{constructor(o){super(o),this.injector=o,this.cadeiasValor=[],this.processos=[],this.canEdit=!0,this.options=[{icon:"bi bi-file-earmark-bar-graph",label:"Entregas",onClick:this.consultProcesso.bind(this)},{divider:!0},{icon:"bi bi-plus-circle",label:"Incluir subprocesso",onClick:this.addProcesso.bind(this)},{icon:"bi bi-pencil-square",label:"Alterar",onClick:this.editProcesso.bind(this)},{divider:!0},{icon:"bi bi-trash",label:"Excluir",onClick:this.deleteProcesso.bind(this)}],this.validate=(i,t)=>{let n=null;return"nome"==t&&!i.value?.length&&(n="Obrigat\xf3rio"),n},this.dao=o.get(C.m),this.cadeiaValorProcessoDao=o.get(T.k),this.join=["processos"],this.title=this.lex.translate("Cadeias de Valores"),this.form=this.fh.FormBuilder({cadeia_valor_id:{default:null},nome:{default:""}},this.cdRef,this.validate)}ngAfterViewInit(){super.ngAfterViewInit(),this.loadData(this.entity)}consultProcesso(o){this.go.navigate({route:["gestao","plano-entrega","entrega","processos",o.id]})}addProcesso(o){var i=this;return(0,p.Z)(function*(){let t=new A.q({path:o.path+"/"+o.id,cadeia_valor_id:o.cadeia_valor_id,processo_pai_id:o.id,nome:"",sequencia:1});yield i.editProcesso(t)})()}editProcesso(o){var i=this;return(0,p.Z)(function*(){i.entity=o,i.form.controls.nome.setValue(o.nome),i.form.controls.nome.setErrors(null);let t=yield i.dialog.template({title:"Processo",modalWidth:500},i.editProcessoForm,[{label:"Gravar",icon:"bi bi-check-circle",color:"btn-outline-success",value:"GRAVAR"},{label:"Cancelar",icon:"bi bi-dash-circle",color:"btn btn-outline-danger",value:"CANCELAR"}]).asPromise();if("GRAVAR"==t.button.value)if(i.form.valid){i.entity.nome=i.form.controls.nome.value,i.submitting=!0;try{(yield i.cadeiaValorProcessoDao.save(i.entity))&&t.dialog.close(),yield i.refreshCadeiaValor()}catch(n){i.dialog.alert("Error",n.message?n.message:n||"Erro desconhecido")}finally{i.submitting=!1}}else i.form.markAllAsTouched();else t.dialog.close()})()}deleteProcesso(o){var i=this;return(0,p.Z)(function*(){if(yield i.dialog.confirm("Exclui ?","Deseja realmente excluir?"))try{yield i.cadeiaValorProcessoDao.delete(o.id),yield i.refreshCadeiaValor()}catch(n){i.dialog.alert("Erro","Erro ao excluir: "+(n?.message?n?.message:n||"Erro desconhecido"))}})()}loadData(o,i){var t=this;return(0,p.Z)(function*(){t.query=t.dao.query({where:[["data_arquivamento","==",null]],orderBy:[["data_inicio","desc"]],join:t.join}),t.query.asPromise().then(n=>{let s=t.form.controls.cadeia_valor_id.value;t.form.controls.cadeia_valor_id.setValue(null),t.cadeiasValor=n.map(l=>Object.assign({},{key:l.id,value:l.nome,data:l})),t.cdRef.detectChanges(),t.form.controls.cadeia_valor_id.setValue(s||(t.cadeiasValor.length?t.cadeiasValor[0].key:null))})})()}onCadeiaValorChange(){const o=(i,t)=>t.sort((n,s)=>n.sequencia-s.sequencia).map(n=>Object.assign(new ve({children:o(i+n.sequencia+".",this.cadeiaValor.processos.filter(s=>s.processo_pai_id==n.id)),level:i+n.sequencia,cor:this.lookup.CORES_BACKGROUND[Math.floor(Math.random()*this.lookup.CORES_BACKGROUND.length)].color}),n));this.cadeiaValor=this.cadeiaValorInstitucional?.selectedItem?.data,this.cadeiaValor&&(this.processos=o("",this.cadeiaValor.processos.filter(i=>!i.processo_pai_id)))}refreshCadeiaValor(){var o=this;return(0,p.Z)(function*(){yield o.loadData(o.entity,o.form)})()}onProcessoClick(o){let i=o;this.go.navigate({route:["gestao","cadeiaValor",this.cadeiaValor?.id,"objetivos",i.id]})}onObjetivoDeleteClick(o){}onObjetivoEditClick(o){}onDrop(o,i){console.log("Drop",o),i?.splice(typeof o.index>"u"?i.length:o.index,0,o.data)}onDragEnd(o){console.log("DragEnd",o)}onDragged(o,i,t){console.log("Dragged",o,i),i.splice(i.indexOf(o),1)}onDragStart(o){console.log("DragStart",o)}static#e=this.\u0275fac=function(i){return new(i||a)(e.Y36(e.zs3))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["cadeia-valor-mapa"]],viewQuery:function(i,t){if(1&i&&(e.Gf(b.Q,5),e.Gf(pe,5),e.Gf(me,5)),2&i){let n;e.iGM(n=e.CRH())&&(t.editableForm=n.first),e.iGM(n=e.CRH())&&(t.cadeiaValorInstitucional=n.first),e.iGM(n=e.CRH())&&(t.editProcessoForm=n.first)}},features:[e.qOj],decls:15,vars:9,consts:[["editProcessoForm",""],["noButtons","",3,"form"],[1,"row","my-2"],["controlName","cadeia_valor_id",3,"size","control","items","change"],["cadeiaValorInstitucional",""],[1,"row","my-2",3,"dndDropzone","dndDrop"],["dndPlaceholderRef","",1,"row","cadeia-valor"],[1,"nivel-1"],[1,"d-flex","justify-content-between"],[1,"card-text","placeholder-glow"],[1,"placeholder","col-2"],[1,"placeholder","col-4"],[1,"placeholder","col-6"],["class","row cadeia-valor","dndType","processo","dndEffectAllowed","move",3,"dndDisableIf","dndDraggable","dndEnd","dndMoved","dndStart",4,"ngFor","ngForOf"],[1,"row"],["icon","bi bi-textarea-t","controlName","nome",3,"size","label","control"],["dndType","processo","dndEffectAllowed","move",1,"row","cadeia-valor",3,"dndDisableIf","dndDraggable","dndEnd","dndMoved","dndStart"],[1,"texto","text-break"],[1,"btn-group","dropstart","dropdown-menu-button","ms-2"],["noArrow","","icon","bi bi-wrench-adjustable-circle","color","transparent-black p-1 py-0",3,"data","items"],[1,"d-flex","align-content-stretch","flex-wrap",3,"dndDropzone","dndDrop"],["dndPlaceholderRef","",1,"nivel-2"],[1,"d-flex","justify-content-between","mb-2"],[1,"placeholder","col-5"],[1,"placeholder","col-7"],["class","nivel-2","dndType","processo","dndEffectAllowed","move",3,"style","dndDisableIf","dndDraggable","dndEnd","dndMoved","dndStart",4,"ngFor","ngForOf"],["dndType","processo","dndEffectAllowed","move",1,"nivel-2",3,"dndDisableIf","dndDraggable","dndEnd","dndMoved","dndStart"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["innerProcessos",""],[3,"dndDropzone","dndDrop"],["dndPlaceholderRef","",1,"nivel-3"],["class","nivel-3","dndType","processo","dndEffectAllowed","move",3,"style","dndDisableIf","dndDraggable","dndEnd","dndMoved","dndStart",4,"ngFor","ngForOf"],["dndType","processo","dndEffectAllowed","move",1,"nivel-3",3,"dndDisableIf","dndDraggable","dndEnd","dndMoved","dndStart"],[1,"btn-group","dropstart","dropdown-menu-button","ms-2","align-button"]],template:function(i,t){1&i&&(e.YNc(0,ue,3,5,"ng-template",null,0,e.W1O),e.TgZ(2,"editable-form",1)(3,"div",2)(4,"input-select",3,4),e.NdJ("change",function(){return t.onCadeiaValorChange()}),e.qZA()()(),e.TgZ(6,"div",5),e.NdJ("dndDrop",function(s){return t.onDrop(s,t.processos)}),e.TgZ(7,"div",6)(8,"div",7)(9,"div",8)(10,"p",9),e._UZ(11,"span",10)(12,"span",11)(13,"span",12),e.qZA()()()(),e.YNc(14,he,14,13,"div",13),e.qZA()),2&i&&(e.xp6(2),e.Q6J("form",t.form),e.xp6(2),e.Q6J("size",12)("control",t.form.controls.cadeia_valor_id)("items",t.cadeiasValor),e.xp6(2),e.Q6J("dndDropzone",e.DdM(8,V)),e.xp6(2),e.Akn("--border-color:gray;--bg:white;--color:black;"),e.xp6(6),e.Q6J("ngForOf",t.processos))},dependencies:[_.sg,_.tP,b.Q,x.m,de.p,ce.x,M.jk,M.Q4,M.s1],styles:['.cadeia-valor[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{border:0;padding:0;background:none}.cadeia-valor[_ngcontent-%COMP%]   .dropdown-menu-button[_ngcontent-%COMP%]{margin-top:-5px}.cadeia-valor[_ngcontent-%COMP%]   .align-button[_ngcontent-%COMP%]{margin-top:-10px}.cadeia-valor[_ngcontent-%COMP%]   .texto[_ngcontent-%COMP%]{max-width:200px}.nivel-1[_ngcontent-%COMP%]{border:2px solid var(--border-color);padding:5px;background:var(--bg);position:relative;margin-bottom:15px;color:var(--color)}.nivel-1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font-size:18px}.nivel-1[_ngcontent-%COMP%]:after, .nivel-1[_ngcontent-%COMP%]:before{top:100%;left:95%;border:solid #fff;content:"";height:0;width:0;position:absolute;pointer-events:none}.nivel-1[_ngcontent-%COMP%]:after{border-width:20px;margin-left:-20px;border-color:#88b7d500;border-top-color:var(--bg)}.nivel-1[_ngcontent-%COMP%]:before{border-width:23px;margin-left:-23px;border-color:#c2e1f500;border-top-color:var(--border-color)}.nivel-2[_ngcontent-%COMP%]{position:relative;padding:10px;color:var(--color);background-color:var(--bg);margin-bottom:10px;margin-right:40px}.nivel-2[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px;text-align:center}.nivel-2[_ngcontent-%COMP%]:before, .nivel-2[_ngcontent-%COMP%]:after{width:20px;height:50%;position:absolute;left:100%;content:""}.nivel-2[_ngcontent-%COMP%]:before{top:0;background:linear-gradient(to right top,var(--bg) 50%,transparent 50%)}.nivel-2[_ngcontent-%COMP%]:after{top:50%;background:linear-gradient(to right bottom,var(--bg) 50%,transparent 50%)}.nivel-3[_ngcontent-%COMP%]{background-color:var(--bg);color:var(--color);padding:5px;margin-bottom:10px}.nivel-3[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px;font-weight:400;margin:0}.nivel-3[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-left:10px;margin-top:5px;padding:5px;font-size:13px;background-color:var(--bg);color:var(--color)}']})}return a})();function be(a,r){if(1&a&&e._UZ(0,"cadeia-valor-list-grid",4),2&a){const o=e.oxw();e.Q6J("selectable",o.selectable)("snapshot",o.snapshot||o.modalRoute||o.route.snapshot)}}function Ae(a,r){1&a&&e._UZ(0,"cadeia-valor-mapa")}function Me(a,r){if(1&a&&(e.TgZ(0,"tab",5),e.YNc(1,Ae,1,0,"ng-template",null,6,e.W1O),e.qZA()),2&a){const o=e.MAs(2);e.Q6J("template",o)}}let Te=(()=>{class a extends y.E{constructor(o){super(o,v.y,C.m),this.injector=o,this.filterWhere=i=>[],this.code="MOD_CADV",this.title=this.lex.translate("Cadeias de Valores"),this.filter=this.fh.FormBuilder({})}ngAfterViewInit(){super.ngAfterViewInit(),this.tabs.active=["TABELA","MAPA"].includes(this.usuarioConfig.active_tab)?this.usuarioConfig.active_tab:"TABELA"}onSelectTab(o){var i=this;return(0,p.Z)(function*(){i.viewInit&&i.saveUsuarioConfig({active_tab:o.key})})()}filterClear(o){o.controls.nome.setValue(""),super.filterClear(o)}static#e=this.\u0275fac=function(i){return new(i||a)(e.Y36(e.zs3))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-cadeia-valor-list"]],viewQuery:function(i,t){if(1&i&&(e.Gf(f.M,5),e.Gf(w.n,5)),2&i){let n;e.iGM(n=e.CRH())&&(t.grid=n.first),e.iGM(n=e.CRH())&&(t.tabs=n.first)}},features:[e.qOj],decls:5,vars:4,consts:[["right","",3,"title","select"],["key","TABELA","icon","bi bi-table","label","Lista",3,"template"],["grid",""],["key","MAPA","icon","bi bi-card-heading","label","Mapa",3,"template",4,"ngIf"],[3,"selectable","snapshot"],["key","MAPA","icon","bi bi-card-heading","label","Mapa",3,"template"],["mapa",""]],template:function(i,t){if(1&i&&(e.TgZ(0,"tabs",0)(1,"tab",1),e.YNc(2,be,1,2,"ng-template",null,2,e.W1O),e.qZA(),e.YNc(4,Me,3,1,"tab",3),e.qZA()),2&i){const n=e.MAs(3);e.Q6J("title",t.isModal?"":t.title)("select",t.onSelectTab.bind(t)),e.xp6(1),e.Q6J("template",n),e.xp6(3),e.Q6J("ngIf",!t.selectable)}},dependencies:[_.O5,w.n,j.i,R,Ce]})}return a})();var xe=d(1184),ye=d(5560);const Ze=["processos"],De=["unidade"];let P=(()=>{class a extends xe.F{constructor(o){super(o,v.y,C.m),this.injector=o,this.validate=(i,t)=>{let n=null;return["nome","unidade_id"].indexOf(t)>=0&&!i.value?.length&&(n="Obrigat\xf3rio"),["data_inicio"].indexOf(t)>=0&&!this.dao?.validDateTime(i.value)&&(n="Inv\xe1lido"),"data_fim"==t&&i.value&&!this.dao?.validDateTime(i.value)&&(n="Inv\xe1lido"),n},this.formValidation=i=>this.form.controls.data_fim.value&&this.form.controls.data_inicio.value>this.form.controls.data_fim.value?"A data do in\xedcio n\xe3o pode ser maior que a data do fim!":null,this.titleEdit=i=>"Editando "+this.lex.translate("Cadeia de Valor")+": "+(i?.nome||""),this.unidadeDao=o.get(N.J),this.join=["processos"],this.form=this.fh.FormBuilder({nome:{default:""},data_inicio:{default:new Date},data_fim:{default:null},unidade_id:{default:""},moveFilhos:{default:!1}},this.cdRef,this.validate)}loadData(o,i){let t=Object.assign({},i.value);i.patchValue(this.util.fillForm(t,o))}initializeData(o){this.entity=new v.y,this.loadData(this.entity,o)}saveData(o){var i=this;return(0,p.Z)(function*(){return new Promise((t,n)=>{i.processos.grid.confirm();let s=i.util.fill(new v.y,i.entity);i.form.value.entidade_id=i.auth.entidade?.id,s=i.util.fillForm(s,i.form.value),s.processos=i.processos.items,t(s)})})()}static#e=this.\u0275fac=function(i){return new(i||a)(e.Y36(e.zs3))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-cadeia-valor-form"]],viewQuery:function(i,t){if(1&i&&(e.Gf(b.Q,5),e.Gf(Ze,5),e.Gf(De,5)),2&i){let n;e.iGM(n=e.CRH())&&(t.editableForm=n.first),e.iGM(n=e.CRH())&&(t.processos=n.first),e.iGM(n=e.CRH())&&(t.unidade=n.first)}},features:[e.qOj],decls:12,vars:17,consts:[["initialFocus","nome",3,"form","disabled","title","submit","cancel"],[1,"row"],["icon","bi bi-textarea-t","controlName","nome","required","",3,"size","label","control"],["date","","label","In\xedcio","icon","bi bi-calendar-date","controlName","data_inicio","required","",3,"size","control","labelInfo"],["date","","label","Fim","icon","bi bi-calendar-date","controlName","data_fim","required","",3,"size","control","labelInfo"],["controlName","unidade_id",3,"size","dao"],["unidade",""],["noPersist","",3,"entity","cdRef"],["processos",""]],template:function(i,t){1&i&&(e.TgZ(0,"editable-form",0),e.NdJ("submit",function(){return t.onSaveData()})("cancel",function(){return t.onCancel()}),e.TgZ(1,"div",1)(2,"div",1),e._UZ(3,"input-text",2),e.qZA(),e.TgZ(4,"div",1),e._UZ(5,"input-datetime",3)(6,"input-datetime",4)(7,"input-search",5,6),e.qZA()(),e._UZ(9,"separator")(10,"cadeia-valor-list-processos",7,8),e.qZA()),2&i&&(e.Q6J("form",t.form)("disabled",t.formDisabled)("title",t.isModal?"":t.title),e.xp6(3),e.Q6J("size",12)("label","Nome da "+t.lex.translate("cadeia de valor"))("control",t.form.controls.nome),e.uIk("maxlength",250),e.xp6(2),e.Q6J("size",4)("control",t.form.controls.data_inicio)("labelInfo","In\xedcio da "+t.lex.translate("cadeia de valor")),e.xp6(1),e.Q6J("size",4)("control",t.form.controls.data_fim)("labelInfo","Fim da "+t.lex.translate("cadeia de valor")),e.xp6(1),e.Q6J("size",4)("dao",t.unidadeDao),e.xp6(3),e.Q6J("entity",t.entity)("cdRef",t.cdRef))},dependencies:[b.Q,q.V,x.m,G.k,ye.N,L]})}return a})();function Ve(a,r){if(1&a&&(e.TgZ(0,"h3",12),e._uU(1),e.qZA()),2&a){const o=e.oxw();e.xp6(1),e.Oqu(o.title)}}function Pe(a,r){if(1&a&&e._UZ(0,"toolbar",13),2&a){const o=e.oxw();e.Q6J("buttons",o.buttons)}}function Oe(a,r){if(1&a&&(e.TgZ(0,"span",14),e._uU(1),e.qZA()),2&a){const o=r.row,i=r.metadata,t=e.oxw();e.xp6(1),e.Oqu(t.getSequencia(i,o))}}function Ee(a,r){if(1&a&&(e.TgZ(0,"span",14),e._uU(1),e.qZA()),2&a){const o=r.row;e.xp6(1),e.Oqu(o.nome)}}const Ne=[{path:"",component:Te,canActivate:[g.a],resolve:{config:h.o},runGuardsAndResolvers:"always",data:{title:"Cadeia de Valor"}},{path:"grid",component:R,canActivate:[g.a],resolve:{config:h.o},data:{title:"Cadeia de Valor"}},{path:"new",component:P,canActivate:[g.a],resolve:{config:h.o},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o de Cadeia de Valor",modal:!0}},{path:":id/edit",component:P,canActivate:[g.a],resolve:{config:h.o},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o de Cadeia de Valor",modal:!0}},{path:":id/consult",component:P,canActivate:[g.a],resolve:{config:h.o},runGuardsAndResolvers:"always",data:{title:"Consulta a Cadeia de Valor",modal:!0}},{path:"processoList",component:(()=>{class a extends y.E{constructor(o){super(o,A.q,T.k),this.injector=o,this.buttons=[],this.filterWhere=i=>{let t=i.value,n=[];return t.planejamento_id?.length&&n.push(["cadeia_valor_id","==",t.cadeia_valor_id]),t.nome?.length&&n.push(["or",["nome","like","%"+t.nome.trim().replace(" ","%")+"%"],["sigla","like","%"+t.nome.trim().replace(" ","%")+"%"]]),n},this.cadeiaValorDao=o.get(C.m),this.cadeiaValorProcessoDao=o.get(T.k),this.title=this.lex.translate("Processos"),this.filter=this.fh.FormBuilder({nome:{default:""},cadeia_valor_id:{default:null}}),this.OPTION_INFORMACOES.onClick=i=>this.go.navigate({route:["gestao","cadeia-valor","processo",i.id,"consult"]},{modal:!0}),this.addOption(this.OPTION_INFORMACOES)}filterClear(o){super.filterClear(o)}getSequencia(o,i){if(!o.nivel){let t=i.processo_pai_id,n="";for(;t;){let s=this.grid?.items.find(l=>l.id==t);n=(s?.sequencia||"")+"."+n,t=s?.processo_pai_id||null}n+=i.sequencia,o.nivel!=n&&(o.nivel=n)}return this.sortProcessos(),o.nivel}sortProcessos(){this.grid?.items.sort((o,i)=>{const t=(this.grid.getMetadata(o)?.nivel||"").split(".").map(s=>("000"+s).substr(-3)).join("."),n=(this.grid.getMetadata(i)?.nivel||"").split(".").map(s=>("000"+s).substr(-3)).join(".");return t<n?-1:t>n?1:0})}static#e=this.\u0275fac=function(i){return new(i||a)(e.Y36(e.zs3))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["cadeia-valor-list-processos-entregas"]],viewQuery:function(i,t){if(1&i&&e.Gf(f.M,5),2&i){let n;e.iGM(n=e.CRH())&&(t.grid=n.first)}},features:[e.qOj],decls:15,vars:23,consts:[["class","my-2",4,"ngIf"],[3,"dao","add","orderBy","groupBy","join","selectable","select"],[3,"buttons",4,"ngIf"],[3,"deleted","form","where","submit","clear","collapseChange","collapsed"],[1,"row"],["label","Nome","controlName","nome","placeholder","Nome",3,"size","control"],["title","N\xedvel",3,"template"],["columnNivel",""],["title","Nome","orderBy","nome",3,"template"],["columnNome",""],["type","options",3,"onEdit","options"],[3,"rows"],[1,"my-2"],[3,"buttons"],[1,"d-block"]],template:function(i,t){if(1&i&&(e.YNc(0,Ve,2,1,"h3",0),e.TgZ(1,"grid",1),e.NdJ("select",function(s){return t.onSelect(s)}),e.YNc(2,Pe,1,1,"toolbar",2),e.TgZ(3,"filter",3)(4,"div",4),e._UZ(5,"input-text",5),e.qZA()(),e.TgZ(6,"columns")(7,"column",6),e.YNc(8,Oe,2,1,"ng-template",null,7,e.W1O),e.qZA(),e.TgZ(10,"column",8),e.YNc(11,Ee,2,1,"ng-template",null,9,e.W1O),e.qZA(),e._UZ(13,"column",10),e.qZA(),e._UZ(14,"pagination",11),e.qZA()),2&i){const n=e.MAs(9),s=e.MAs(12);e.Q6J("ngIf",!t.isModal),e.xp6(1),e.Q6J("dao",t.dao)("add",t.add)("orderBy",t.orderBy)("groupBy",t.groupBy)("join",t.join)("selectable",t.selectable),e.xp6(1),e.Q6J("ngIf",!t.selectable),e.xp6(1),e.Q6J("deleted",t.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",t.filter)("where",t.filterWhere)("submit",t.filterSubmit.bind(t))("clear",t.filterClear.bind(t))("collapseChange",t.filterCollapseChange.bind(t))("collapsed",!t.selectable&&t.filterCollapsed),e.xp6(2),e.Q6J("size",7)("control",t.filter.controls.nome),e.uIk("maxlength",250),e.xp6(2),e.Q6J("template",n),e.xp6(3),e.Q6J("template",s),e.xp6(3),e.Q6J("onEdit",t.edit)("options",t.options),e.xp6(1),e.Q6J("rows",t.rowsLimit)}},dependencies:[_.O5,f.M,Z.a,D.b,Q.z,I.n,J.Q,x.m]})}return a})(),canActivate:[g.a],resolve:{config:h.o},runGuardsAndResolvers:"always",data:{title:"Lista de Processos da Cadeia de Valor",modal:!0}}];let Qe=(()=>{class a{static#e=this.\u0275fac=function(i){return new(i||a)};static#t=this.\u0275mod=e.oAB({type:a});static#o=this.\u0275inj=e.cJS({imports:[E.Bz.forChild(Ne),E.Bz]})}return a})(),Ie=(()=>{class a{static#e=this.\u0275fac=function(i){return new(i||a)};static#t=this.\u0275mod=e.oAB({type:a});static#o=this.\u0275inj=e.cJS({imports:[_.ez,B.K,S.UX,M.c8,Qe]})}return a})()}}]);