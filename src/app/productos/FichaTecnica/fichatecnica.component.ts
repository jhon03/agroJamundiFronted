import { Component, OnInit } from '@angular/core';
import { stringToKeyValue } from '@angular/flex-layout/extended/style/style-transforms';
import { ProductoService } from 'src/app/Services/producto.service';
import { ProductoDTO } from 'src/app/Models/Producto';
import swal from 'sweetalert2';
@Component({
  selector: 'app-finca1',
  templateUrl: './fichatecnica.component.html',
  styleUrls: ['./fichatecnica.component.css']
})
export class FichaTecnicaComponent implements OnInit {



  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {


    /*
    https://www.youtube.com/watch?v=p-5eNidpjBs
    
        function solonumeros(e){
    
          key = e.keyKode || e.which;
          teclado= String.fromCharCode(key);
    
          numero = "0123456789";
          especiales="8-37-38-46";
    
          teclado_especial= false;
    
          for(var i in especiales){
    
            if(key== especiales[i]){
              teclado_especial = true;
    
            }
          }
          if(numeros.index.Of(teclado)== -1 && !teclado_especial){
            return false; 
          }
        }
        */
  }

}
