import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { AuthRoutingModule } from '../auth/auth-routing.module';
import {MatIconModule} from '@angular/material/icon'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button'; 
@NgModule({
  declarations: [],


  imports: [
    CommonModule,
    MatToolbarModule,
    AuthRoutingModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
    
  
  ]
})
export class MaterialModule { }
