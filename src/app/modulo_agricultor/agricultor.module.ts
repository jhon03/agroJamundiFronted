import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgricultorRoutingModule } from './agricultor-routing.module';
import { CrearAgricultorComponent } from './productos/crear-agricultor.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PerfilAgricultorComponent } from './perfil-agricultor/perfil-agricultor.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    CrearAgricultorComponent,
    PerfilAgricultorComponent,

  ],
  imports: [
    CommonModule,
    AgricultorRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatGridListModule
  ]
})
export class AgricultorModule { }
