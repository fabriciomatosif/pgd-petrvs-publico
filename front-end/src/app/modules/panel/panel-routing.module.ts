import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigResolver } from 'src/app/resolvies/config.resolver';
import { PanelListComponent } from './panel-list/panel-list.component';
import { PanelFormComponent } from './panel-form/panel-form.component';
import { PanelListLogsComponent } from './panel-list-logs/panel-list-logs.component';
import { PanelSeederComponent } from './panel-seeder/panel-seeder.component';
import { JobAgendadoComponent } from './panel-job-agendados/panel-job-agendados.component';
import { PanelLayoutComponent } from './panel-layout/panel-layout.component';
import { PanelAdminsListComponent } from './panel-admins-list/panel-admins-list.component';
import { PanelAdminsFormComponent } from './panel-admins-form/panel-admins-form.component';
import { PanelAdminGuard } from 'src/app/guards/panel_admin.guard';
import { PanelChangePasswordComponent } from './panel-change-password/panel-change-password.component';

const routes: Routes = [
  { path: '', 
    component: PanelLayoutComponent,  
    children: [
      { path: 'tenants', component: PanelListComponent, runGuardsAndResolvers: 'always', data: { title: "Painéis" } },
      { path: 'tenants/new', component: PanelFormComponent, resolve: { config: ConfigResolver }, runGuardsAndResolvers: 'always', data: { title: "Inclusão de Painel", modal: true } },
      { path: 'tenants/:id/edit', component: PanelFormComponent, resolve: { config: ConfigResolver }, runGuardsAndResolvers: 'always', data: { title: "Edição de Painel", modal: true } },
      { path: 'tenants/:id/consult', component: PanelFormComponent, resolve: { config: ConfigResolver }, runGuardsAndResolvers: 'always', data: { title: "Consulta a Painel", modal: true } },
      { path: 'tenants/:id/logs', component: PanelListLogsComponent, resolve: { config: ConfigResolver }, runGuardsAndResolvers: 'always', data: { title: "Consulta a Logs", modal: true } },
      { path: 'seeder', component: PanelSeederComponent, resolve: { config: ConfigResolver }, runGuardsAndResolvers: 'always', data: { title: "Executa Seeder no Tenant", modal: true }, canActivate: [PanelAdminGuard] },
      { path: 'job-agendados', component: JobAgendadoComponent, resolve: { config: ConfigResolver }, runGuardsAndResolvers: 'always', data: { title: "Job agendados", modal: true }, canActivate: [PanelAdminGuard] },
      { path: 'logs2', component: PanelListLogsComponent, resolve: { config: ConfigResolver }, runGuardsAndResolvers: 'always', data: { title: "Consulta a Logs", modal: true }, canActivate: [PanelAdminGuard] },
      { path: 'admins', component: PanelAdminsListComponent, resolve: { config: ConfigResolver }, runGuardsAndResolvers: 'always', data: { title: "Consulta admins do painel" }, canActivate: [PanelAdminGuard] },
      { path: 'admins/new', component: PanelAdminsFormComponent, resolve: { config: ConfigResolver }, runGuardsAndResolvers: 'always', data: { title: "Inclusão de usuários do painel", modal: true }, canActivate: [PanelAdminGuard] },
      { path: 'admins/:id/edit', component: PanelAdminsFormComponent, resolve: { config: ConfigResolver }, runGuardsAndResolvers: 'always', data: { title: "Edição de usuários do painel", modal: true }, canActivate: [PanelAdminGuard] },
      { path: 'change-password', component: PanelChangePasswordComponent, resolve: { config: ConfigResolver }, runGuardsAndResolvers: 'always', data: { title: "Alterar minha senha", modal: true }, canActivate: [PanelAdminGuard] },  
      { path: '',   redirectTo: 'tenants', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }