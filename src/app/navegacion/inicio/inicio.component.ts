import { Component, OnInit } from '@angular/core';
import { AgricultorDTO } from 'src/app/Models/AgricultorDTO';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
 

})
export class InicioComponent implements OnInit {

  public Agricultor: AgricultorDTO[] = [];
 

  public agricultores: AgricultorDTO[]= [];



  
  constructor() { 
    
  }

  
  ngOnInit(): void {



  }



  cargarAgricultor(): void {


   
}


    
}