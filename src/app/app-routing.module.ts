import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './navegacion/inicio/inicio.component';

const routes: Routes = [

 
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m =>m.AuthModule)
    },

    {
      path:'agricultor',
      loadChildren: () => import('./modulo_agricultor/agricultor.module').then(m =>m.AgricultorModule)
      },
      {
        path:'productos',
        loadChildren: () => import('./productos/productos.module').then(m =>m.ProductosModule)
        },
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
