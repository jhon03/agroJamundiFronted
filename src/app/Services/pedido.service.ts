import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Pedido } from '../Models/Pedido';
import { environment } from 'src/environments/environment';
import { ProductoDTO } from '../Models/Producto';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private baseUrl: string = environment.baseUrl;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  carritoCompras(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.baseUrl + '/carrito/carritoCompras');
  }

  addPedido(pedido: Pedido): Observable<any> {
     
    return this.http.post(this.baseUrl + '/carrito/addProducto', pedido);
  }

  getPedido(idPedido: any): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.baseUrl + '/carrito/buscarPedido/'}/${idPedido}`)
  }

  delete(idPedido: number): Observable<Pedido>{
    return this.http.delete<Pedido>(`${this.baseUrl + '/carrito/eliminarPedido'}/${idPedido}`, { headers: this.httpHeaders })
  }
}
