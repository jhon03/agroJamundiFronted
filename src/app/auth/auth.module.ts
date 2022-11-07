import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';

import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatCardModule} from '@angular/material/card'; 

import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatOptionModule } from '@angular/material/core';
import { RegistroComponent } from './registro/registro.component';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
 
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule, 
    MatFormFieldModule,
    MatOptionModule,
    MatSidenavModule

  
  ]
})
export class AuthModule { }
