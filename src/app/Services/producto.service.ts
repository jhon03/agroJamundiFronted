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
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

 
//array
  getProductos(): Observable <ProductoDTO[]>{
    return this.http.get<ProductoDTO[]>(this.baseUrl+ '/api/producto/productos');
  }

  crear(producto: ProductoDTO) : Observable<any>{

    return this.http.post(this.baseUrl+'/api/producto/save', producto);
  }

  getProducto(idProducto: any): Observable<ProductoDTO>{
    return this.http.get<ProductoDTO>(`${this.baseUrl+ '/api/producto/findById/'}/${idProducto}`)
  }

delete(idProducto: number): Observable<ProductoDTO>{
  return this.http.delete<ProductoDTO>(`${this.baseUrl+ '/api/producto/eliminarProducto'}/${idProducto}`,  {headers: this.httpHeaders})
}

getAgregarCarrito(nombre:string): Observable<ProductoDTO[]>{
  return this.http.get<ProductoDTO[]>(this.baseUrl+ '/api/producto/buscarNombre' );
}

getAgregarcarrito(ProductoDTO: ProductoDTO){
  
}
}
