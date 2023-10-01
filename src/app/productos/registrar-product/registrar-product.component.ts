import { Component, OnInit } from '@angular/core';
import { ProductoDTO } from 'src/app/Models/Producto';
import { ProductoService } from 'src/app/Services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';




interface Categoria {
  value: String;
  viewValue: String;
}


interface ProdDisponible{
  value2: String;
  viewValue: String;
}
@Component({
  selector: 'app-registrar-product',
  templateUrl: './registrar-product.component.html',
  styleUrls: ['./registrar-product.component.css']
})
export class RegistrarProductComponent implements OnInit {

  categorias: Categoria[] = [

    {value: 'agricola', viewValue: 'Agricola'},
    {value: 'pecuaria', viewValue: 'Pecuaria'},
    {value: 'pesquera', viewValue: 'Pesquera'}
  
   ]
   disponibilidad: ProdDisponible[] = [

    {value2: 'agricola', viewValue: 'Kg'},
    {value2: 'pecuaria', viewValue: 'Lb'},
    {value2: 'pesquera', viewValue: 'Tonelada'}
  
  
   ]
  public producto: ProductoDTO = new ProductoDTO();

  constructor(private productoService: ProductoService,
    private router: Router,
    private activateRoute: ActivatedRoute) {


  }

  ngOnInit(): void {

  }

 

  public registar(): void {

  
  }

}

