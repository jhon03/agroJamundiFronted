import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AgricultorDTO } from '../Models/AgricultorDTO';

@Injectable({
  providedIn: 'root'
})
export class AgricultorService {

  private baseUrl: string = environment.baseUrl;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })


  constructor(private http: HttpClient) { }
 
  getAgricultor(nombre: string): Observable<AgricultorDTO[]>{
    return this.http.get<AgricultorDTO[]>(this.baseUrl + `api/agricultor/buscarNombre?nombre=${nombre}`)
  }


}
