import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgricultorRoutingModule } from './agricultor-routing.module';
import { CrearAgricultorComponent } from './crear-agricultor/crear-agricultor.component';
import { CrearProductComponent } from './crear-product/crear-product.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    CrearAgricultorComponent,
    CrearProductComponent
  ],
  imports: [
    CommonModule,
    AgricultorRoutingModule,
    MatCardModule
  ]
})
export class AgricultorModule { }
