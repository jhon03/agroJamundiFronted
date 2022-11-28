import { Component, OnInit } from '@angular/core';
import { ProductoDTO } from 'src/app/Models/Producto';
import { ProductoService } from 'src/app/Services/producto.service';
import { PedidoService } from 'src/app/Services/pedido.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from 'src/app/Models/Pedido';
import { ClienteDTO } from 'src/app/Models/ClienteDTO';
import swal from 'sweetalert2';

@Component({
  selector: 'app-carritocompras',
  templateUrl: './carritocompras.component.html',
  styleUrls: ['./carritocompras.component.css']
})
export class CarritocomprasComponent implements OnInit {
[x: string]: any;

  public pedidos: Pedido[] = [];
  //public productos: ProductoDTO[] = [];

  public pedido: Pedido = new Pedido();
  //public producto: ProductoDTO = new ProductoDTO();

  constructor(private productoService: ProductoService,
    private pedidoService: PedidoService,
    private router: Router,
    private activateRoute: ActivatedRoute) {

  }
  ngOnInit(): void {

    this.cargarPedido();
    this.pedidoService.carritoCompras().subscribe(
      pedidos => this.pedidos = pedidos
    );
  }

  getPedidosenCarritoCompras() {

    this.pedidoService.carritoCompras().subscribe(resp => (this.pedidos = resp));

  }

  eliminarPedido(pedido: Pedido): void{

    this.pedidoService.delete(pedido.idPedido).subscribe(

      response => {
        this.pedidos = this.pedidos.filter(ped => ped !== pedido)
      
        swal.fire('¿Seguro que desea eliminar el pedido?', `Pedido ${pedido.codigo} eliminado con éxito`, 'success')
        
      }
    )
  }
  cargarPedido(): void {
    this.activateRoute.params.subscribe(params => {
      let idPedido = params['idPedido']

      if (idPedido) {
        this.pedidoService.getPedido(idPedido).subscribe((pedido) => this.pedido = pedido)

      }
    })
  }


}



