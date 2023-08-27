import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAgricultorComponent } from './productos/crear-agricultor.component';
import { PerfilAgricultorComponent } from './perfil-agricultor/perfil-agricultor.component';


const routes: Routes = [

  {
    path: '',
    component: CrearAgricultorComponent
  },
  {
    path:'crear-agricultor', 
    component: CrearAgricultorComponent
  },
 
  {
    path: 'perfilAgricultor',
    component: PerfilAgricultorComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgricultorRoutingModule { }
