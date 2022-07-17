import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { RegistrarProductComponent } from './registrar-product/registrar-product.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    RegistrarProductComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MatCardModule,
    MatFormFieldModule
  ]
})
export class ProductosModule { }
