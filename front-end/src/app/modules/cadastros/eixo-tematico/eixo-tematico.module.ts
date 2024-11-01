import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from 'src/app/components/components.module';
import { EixoTematicoRoutingModule } from './eixo-tematico-routing.module';
import { EixoTematicoFormComponent } from './eixo-tematico-form/eixo-tematico-form.component';
import { EixoTematicoListComponent } from './eixo-tematico-list/eixo-tematico-list.component';

@NgModule({
  declarations: [
    EixoTematicoFormComponent,
    EixoTematicoListComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    EixoTematicoRoutingModule
  ]
})
export class EixoTematicoModule { }