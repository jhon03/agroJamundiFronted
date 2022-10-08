import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAgricultorComponent } from './crear-agricultor/crear-agricultor.component';


const routes: Routes = [

  {
    path: '',
    component: CrearAgricultorComponent
  },
  {
    path:'crear-agricultor', 
    component: CrearAgricultorComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgricultorRoutingModule { }
