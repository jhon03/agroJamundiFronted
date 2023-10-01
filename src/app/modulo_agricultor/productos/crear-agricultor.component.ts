import { Component, OnInit } from '@angular/core';
import { AgricultorDTO } from 'src/app/Models/AgricultorDTO';
import { AgricultorService } from 'src/app/Services/agricultor.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';


interface Tiide {
  value: String;
  viewValue: String;
}

@Component({
  selector: 'app-crear-agricultor',
  templateUrl: './crear-agricultor.component.html',
  styleUrls: ['./crear-agricultor.component.css']
})
export class CrearAgricultorComponent implements OnInit {

  tiposIdentificación: Tiide[] = [

    {value: 'CC', viewValue: 'cédula de ciudadania'},
    {value: 'PP', viewValue: 'PASAPORTE'},
    {value: 'TI', viewValue: 'Tarjeta de Identidad'},
    {value: 'CD', viewValue: 'cédula digital'}

  ]

  categoria: Tiide[] = [
    {value: 'CC', viewValue: 'cédula de ciudadania'},
    {value: 'PP', viewValue: 'PASAPORTE'},
    {value: 'TI', viewValue: 'Tarjeta de Identidad'},
    {value: 'CD', viewValue: 'cédula digital'}

  ]

  public agricultor: AgricultorDTO = new AgricultorDTO();
  constructor(private agricultorService: AgricultorService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {



    /** 
        this.getbuscarCodigo("MEDE");
      }
       
      getbuscarCodigo(code : string){
        this.destinationService.getDestination(code).subscribe(resp => (this.destinations = resp));
      }*/
  }
  
  registrarAgricultor(): void {

}


}
