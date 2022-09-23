import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { RegistrarProductComponent } from './registrar-product/registrar-product.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { VerProductosComponent } from './ver-productos/ver-productos.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import { Finca1Component } from './finca1/finca1.component';
import {MatDialogModule} from '@angular/material/dialog'; 

import {MatButtonModule} from '@angular/material/button'; 
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    RegistrarProductComponent,
    VerProductosComponent,
    Finca1Component
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDialogModule,
    MatStepperModule
   
  

  ]
})
export class ProductosModule { }
