import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelListComponent } from './panel-list/panel-list.component';
import { PanelLoginComponent } from './panel-login/panel-login.component';
import { PanelFormComponent } from './panel-form/panel-form.component';
import { PanelRoutingModule } from './panel-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { UteisModule } from '../uteis/uteis.module';
import { PanelListLogsComponent } from './panel-list-logs/panel-list-logs.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PanelSeederComponent } from './panel-seeder/panel-seeder.component';
import { JobAgendadoComponent } from './panel-job-agendados/panel-job-agendados.component';
import { PanelLayoutComponent } from './panel-layout/panel-layout.component';
import { PanelAdminsListComponent } from './panel-admins-list/panel-admins-list.component';
import { PanelAdminsFormComponent } from './panel-admins-form/panel-admins-form.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { PanelChangePasswordComponent } from './panel-change-password/panel-change-password.component';


@NgModule({
  declarations: [
    PanelListComponent,
    PanelLoginComponent,
    PanelFormComponent,
    PanelListLogsComponent,
    PanelSeederComponent,
    PanelLayoutComponent,
    PanelAdminsListComponent,
    PanelAdminsFormComponent,
    PanelChangePasswordComponent,
    JobAgendadoComponent
  ],
    imports: [
        CommonModule,
        PanelRoutingModule,
        ComponentsModule,
        UteisModule,
        FormsModule,
        ReactiveFormsModule,
        MultiSelectModule
    ]
})
export class PanelModule { }