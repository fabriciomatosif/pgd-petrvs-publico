"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[358],{4358:(b,n,t)=>{t.r(n),t.d(n,{DesdobramentoModule:()=>g});var c=t(6733),i=t(929),l=t(2214),e=t(755),o=t(5471);let d=(()=>{class a extends i._{constructor(s){super(s),this.injector=s,this.typeObject="",this.idObject="",this.data=[{label:"F.C Barcelona",expanded:!0,children:[{label:"Argentina",expanded:!0,styleClass:"bg-success text-white",children:[{label:"Argentina"},{label:"France"}]},{label:"France",expanded:!0,children:[{label:"France"},{label:"Morocco"}]}]}],this.programaDao=s.get(l.w)}ngOnInit(){"programa"===(super.ngOnInit(),this.typeObject=this.urlParams?.get("type")||"",this.idObject=this.urlParams?.get("id")||"",this.typeObject)&&this.carregaPrograma()}carregaPrograma(){this.programaDao.getById(this.idObject)}static#t=this.\u0275fac=function(r){return new(r||a)(e.Y36(e.zs3))};static#a=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-desdobramento"]],features:[e.qOj],decls:1,vars:1,consts:[[3,"value"]],template:function(r,v){1&r&&e._UZ(0,"p-organizationChart",0),2&r&&e.Q6J("value",v.data)},dependencies:[o.OE]})}return a})();var h=t(5579),m=t(1391),u=t(2314);const p=[{path:":id/:type",component:d,canActivate:[m.a],resolve:{config:u.o},runGuardsAndResolvers:"always",data:{title:"Desdobramento",modal:!0}}];let g=(()=>{class a{static#t=this.\u0275fac=function(r){return new(r||a)};static#a=this.\u0275mod=e.oAB({type:a});static#e=this.\u0275inj=e.cJS({imports:[h.Bz.forRoot(p),c.ez,o.lC]})}return a})()}}]);