import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AgricultorDTO } from '../Models/AgricultorDTO';

@Injectable({
  providedIn: 'root'
})
export class AgricultorService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }
/** 
  getDestination(code:string): Observable<Destination[]>{

    return this.http.get<Destination[]>(this.baseUrl+'/api/destination/buscarPorCodigo/'+code);

*/


}
