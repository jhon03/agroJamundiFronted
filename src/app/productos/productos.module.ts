import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { RegistrarProductComponent } from './registrar-product/registrar-product.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { VerProductosComponent } from './ver-productos/ver-productos.component';

import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import { FichaTecnicaComponent } from './FichaTecnica/fichatecnica.component';
import {MatDialogModule,  MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'; 
import {MatButtonModule} from '@angular/material/button'; 
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CarritocomprasComponent } from './carritocompras/carritocompras.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    RegistrarProductComponent,
    VerProductosComponent,
    FichaTecnicaComponent,
    CarritocomprasComponent

  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDialogModule,
    MatOptionModule,
    FormsModule,
    FlexLayoutModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class ProductosModule { }
