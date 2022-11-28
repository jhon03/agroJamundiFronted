import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from './auth/auth.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './Services/auth.service';
import { AgricultorModule } from './modulo_agricultor/agricultor.module';
import { ProductosModule } from './productos/productos.module';
import { VerProductosComponent } from './productos/ver-productos/ver-productos.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { FooterComponent } from './footer/footer.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavegacionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    AuthModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    AgricultorModule,
    ProductosModule,
    MatSliderModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
