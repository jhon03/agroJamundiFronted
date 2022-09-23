import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  hide = true;
 
  constructor(private auth: AuthService, private router: Router) { }

  //datos obtenidos desde el html

  registroUsuario = {

    nombre: '',
    cedula: '',
    edad: '',
    correo:'',
    password: ''
  }

  ngOnInit(): void {
  }

  /** 
  registrar(){
    this.auth.registroUsuario(this.registroUsuario).subscribe((res) => {
      console.log(res);
    },
    )
  }*/

}
