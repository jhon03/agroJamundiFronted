import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, pipe, switchAll, throwError } from 'rxjs';
import { AgricultorModule } from '../agricultor/agricultor.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registroUrl:string = 'http//localhost:9090/api/agricultor/crear/agricultor';
  private loginUrl = 'http//localhost:9090/api/auth'

  constructor(private http: HttpClient) {}
/** 
  create(agricultor:Agricultor): Observable<Agricultor>{

    return this.http.post(this.registroUrl, agricultor, { menu: this.httpMenu})
    pipe(map((response:any)=> response.agricultor as Agricultor),
    
    catchError(e  => {s

      if(e.status == 400){
        return throwError(e);
        
      }

      console.error(e.error.mensaje);
      switchAll(e.error.mensaje, e.error, 'error');
      return throwError(e)
    })
    )
  }*/
}
  
