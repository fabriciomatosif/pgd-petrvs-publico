import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProdutoListComponent } from "./produto-list/produto-list.component";
import { AuthGuard } from "src/app/guards/auth.guard";
import { ConfigResolver } from "src/app/resolvies/config.resolver";
import { ProdutoFormComponent } from "./produto-form/produto-form.component";
import { ProdutoShowComponent } from "./produto-show/produto-show.component";

const routes: Routes = [
  { path: '', component: ProdutoListComponent, canActivate: [AuthGuard], resolve: { config: ConfigResolver }, runGuardsAndResolvers: 'always', data: { title: "Produtos" } },
  { path: 'new', component: ProdutoFormComponent, canActivate: [AuthGuard], resolve: { config: ConfigResolver }, runGuardsAndResolvers: 'always', data: { title: "Inclusão de produto", modal: true } },
  { path: ':id/edit', component: ProdutoFormComponent, canActivate: [AuthGuard], resolve: { config: ConfigResolver }, runGuardsAndResolvers: 'always', data: { title: "Edição de produto", modal: true } },
  { path: ':id/show', component: ProdutoShowComponent, canActivate: [AuthGuard], resolve: { config: ConfigResolver }, runGuardsAndResolvers: 'always', data: { title: "Visualização de produto", modal: true } }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }