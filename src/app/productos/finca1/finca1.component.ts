import { Component, OnInit } from '@angular/core';
import { stringToKeyValue } from '@angular/flex-layout/extended/style/style-transforms';


@Component({
  selector: 'app-finca1',
  templateUrl: './finca1.component.html',
  styleUrls: ['./finca1.component.css']
})
export class Finca1Component implements OnInit {


  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor() {


   }

  ngOnInit(): void {



const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

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
