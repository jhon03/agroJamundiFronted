import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';




import { AgricultorDTO } from 'src/app/Models/AgricultorDTO';
import { AgricultorService } from 'src/app/Services/agricultor.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
 

})
export class InicioComponent implements OnInit {
 

  public agricultor: AgricultorDTO = new AgricultorDTO();



  
  constructor(private agricultorService: AgricultorService,
    private activateRoute: ActivatedRoute,
    private router: Router) { 
    
  }

  
  ngOnInit(): void {

    this.cargarAgricultor();

  }



  cargarAgricultor(): void {


    this.activateRoute.params.subscribe(params => {
      let nombre = params['nombre']

      if(nombre){

        this.agricultorService.getAgricultor(nombre).subscribe((agricultor) => agricultor = agricultor)
}
})
    }
  }