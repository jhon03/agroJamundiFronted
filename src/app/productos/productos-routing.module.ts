import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarProductComponent } from './registrar-product/registrar-product.component';

const routes: Routes = [

  {
    path: '',
    component: RegistrarProductComponent
  },
  {
    path:'crear-producto', 
    component: RegistrarProductComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
