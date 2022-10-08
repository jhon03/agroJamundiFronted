import { Component, OnInit} from '@angular/core';
import { ProductoDTO } from 'src/app/Models/Producto';
import { ProductoService } from 'src/app/Services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-product',
  templateUrl: './registrar-product.component.html',
  styleUrls: ['./registrar-product.component.css']
})
export class RegistrarProductComponent implements OnInit {

 public producto: ProductoDTO = new ProductoDTO(); 

  constructor(private productoService: ProductoService,
    private router: Router,
    private  activateRoute: ActivatedRoute) {

    
   }

  ngOnInit(): void {

     this.cargarProducto();
  }

  cargarProducto(): void{
    this.activateRoute.params.subscribe(params => {
      let idProducto = params['idProducto']

      if(idProducto){
        this.productoService.getProducto(idProducto).subscribe( (producto) => this.producto = producto)
      }
    })
  }

  crear(): void{
    this.productoService.crear(this.producto).subscribe(producto => { 

      this.router.navigate(['/ver-productos'])
      swal.fire('New Product', `ProductoDTO ${this.producto.nombre} creado con exito`,'success')
     
      
    }
    );
  }

}
