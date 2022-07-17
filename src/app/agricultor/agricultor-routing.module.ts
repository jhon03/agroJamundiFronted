import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAgricultorComponent } from './crear-agricultor/crear-agricultor.component';
import { CrearProductComponent } from './crear-product/crear-product.component';

const routes: Routes = [

  {
    path: '',
    component: CrearProductComponent
  },
  {
    path:'crear-product', 
    component: CrearProductComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgricultorRoutingModule { }
