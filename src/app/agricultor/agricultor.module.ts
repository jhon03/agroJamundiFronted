import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgricultorRoutingModule } from './agricultor-routing.module';
import { CrearAgricultorComponent } from './crear-agricultor/crear-agricultor.component';

import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    CrearAgricultorComponent,

  ],
  imports: [
    CommonModule,
    AgricultorRoutingModule,
    MatCardModule
  ]
})
export class AgricultorModule { }
