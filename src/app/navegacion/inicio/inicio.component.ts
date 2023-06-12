import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';




import { AgricultorDTO } from 'src/app/Models/AgricultorDTO';
import { AgricultorService } from 'src/app/Services/agricultor.service';
import { VerProductosComponent } from 'src/app/productos/ver-productos/ver-productos.component';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
 

})
export class InicioComponent implements OnInit {

  public Agricultor: AgricultorDTO[] = [];
 

  public agricultores: AgricultorDTO[]= [];



  
  constructor(private agricultorService: AgricultorService,
    private activateRoute: ActivatedRoute,
    private router: Router) { 
    
  }

  
  ngOnInit(): void {

    this.cargarAgricultor();

    this.agricultorService.getAgricultores().subscribe(
      agricultores => this.agricultores = agricultores
    );


  }



  cargarAgricultor(): void {


    this.activateRoute.params.subscribe(params => {
      let nombre = params['nombre']

      if(nombre){

        this.agricultorService.getAgricultor(nombre).subscribe((agricultor) => agricultor = agricultor)
}
});
    }


    getAgricultores(){
      this.agricultorService.getAgricultores().subscribe(resp => (this.agricultores = resp));
    }

    
}