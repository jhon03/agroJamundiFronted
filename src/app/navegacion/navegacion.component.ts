import { Component, OnInit } from '@angular/core';
import { AgricultorDTO } from '../Models/AgricultorDTO';
import { AgricultorService } from '../Services/agricultor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  searchQuery: string;

   public agricultor: AgricultorDTO = new AgricultorDTO();

    constructor(private agricultorService: AgricultorService,
    private router: Router,
    private activateRoute: ActivatedRoute) {

     }

  ngOnInit(): void {
    this.cargarAgricultor();

    
  }

  cargarAgricultor(): void {


    this.activateRoute.params.subscribe(params => {
      let nombre = params['nombre']

      if(nombre){

      
        this.router.navigate(['/inicio'])
            }
    })
  }

}
