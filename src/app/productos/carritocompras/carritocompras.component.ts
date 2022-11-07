import { Component, OnInit } from '@angular/core';
import { ProductoDTO } from 'src/app/Models/Producto';
import { ProductoService } from 'src/app/Services/producto.service';
import { PedidoService } from 'src/app/Services/pedido.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from 'src/app/Models/Pedido';
@Component({
  selector: 'app-carritocompras',
  templateUrl: './carritocompras.component.html',
  styleUrls: ['./carritocompras.component.css']
})
export class CarritocomprasComponent implements OnInit {
  

  public pedidos : Pedido[] = [];
  public productos : ProductoDTO[] = [];
  
  
  public pedido: Pedido = new Pedido();
  public producto: ProductoDTO = new ProductoDTO();

  constructor( private productoService: ProductoService,
    private pedidoService: PedidoService,
 private router: Router,
 private activateRoute: ActivatedRoute){

 }
  ngOnInit(): void {
  
  }

  getProductosenCarritoCompras(){

    this.pedidoService.carritoCompras().subscribe(resp => (this.productos = resp));
    
  }
    
      }
    


