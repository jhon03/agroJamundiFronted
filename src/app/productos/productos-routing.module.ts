import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Finca1Component } from './finca1/finca1.component';
import { RegistrarProductComponent } from './registrar-product/registrar-product.component';
import { VerProductosComponent } from './ver-productos/ver-productos.component';

const routes: Routes = [

  {
    path: '',
    component: RegistrarProductComponent
  },
  {
    path:'crear-producto', 
    component: RegistrarProductComponent
  },

  {
    path: 'ver-productos',
    component: VerProductosComponent
  },

  {
    path: 'productos_finca',
    component: Finca1Component
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
