import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ProductoDTO } from '../Models/Producto';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  private baseUrl: string = environment.baseUrl;

  private httpHeaers = new HttpHeaders({'Content Type': 'application/json'})

  constructor(private http: HttpClient) { }

  crear(producto: ProductoDTO) : Observable<ProductoDTO>{

    return this.http.post<ProductoDTO>(this.baseUrl+'/api/producto/save', ProductoDTO);
  }

}
