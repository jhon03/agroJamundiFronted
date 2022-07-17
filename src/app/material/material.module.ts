import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { AuthRoutingModule } from '../auth/auth-routing.module';
import {MatIconModule} from '@angular/material/icon'; 

@NgModule({
  declarations: [],


  imports: [
    CommonModule,
    MatToolbarModule,
    AuthRoutingModule,
    MatIconModule
  ]
})
export class MaterialModule { }
