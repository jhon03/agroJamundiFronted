import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritocomprasComponent } from './carritocompras/carritocompras.component';
import { FichaTecnicaComponent } from './FichaTecnica/fichatecnica.component';
import { RegistrarProductComponent } from './registrar-product/registrar-product.component';
import { VerProductosComponent } from './ver-productos/ver-productos.component';
import { InicioComponent } from '../navegacion/inicio/inicio.component';
import { ProductoAgricolasComponent } from './producto-agricolas/producto-agricolas.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },


  {
    path: 'productos',
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
    path: 'ficha-tecnica',
    component: FichaTecnicaComponent
  },
  {
    path: 'carrito-compras',
    component: CarritocomprasComponent
  },
  {
    path: 'productos-agricolas',
    component: ProductoAgricolasComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
