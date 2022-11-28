import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-agricultor',
  templateUrl: './crear-agricultor.component.html',
  styleUrls: ['./crear-agricultor.component.css']
})
export class CrearAgricultorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /** 
        this.getbuscarCodigo("MEDE");
      }
       
      getbuscarCodigo(code : string){
        this.destinationService.getDestination(code).subscribe(resp => (this.destinations = resp));
      }*/
  }

}
