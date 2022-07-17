import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titulo:string = "Por favor Sign In";
  constructor(private auth: AuthService, private router: Router) { }

  loguear={
    correo: '',
    password: ''
  }

  ngOnInit(): void {}

  /*
    login(){
      this.auth.loginUsuario(this.loguear).subscribe(
        (res) => {
        console.log(res);
    },
      )
  
  }*/
  

}
