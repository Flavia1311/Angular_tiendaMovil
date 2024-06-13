import { Component } from '@angular/core';
import { ICelular } from  './Celular';

@Component({
  selector: 'app-celular-list',
  templateUrl: './celular-list.component.html',
  styleUrl: './celular-list.component.scss'
})


export class CelularListComponent {
  celulares:Array<ICelular>=[

    {
      marca:"Samsung",
      modelo:"A04",
      precio:250000,
      stock:60,
      imagen:"assets/img/samsA04.jpeg",
      oferta:true,
      cantidad:2,
    },
     {
      marca:"Samsung",
      modelo:"A14",
      precio:250000,
      stock:30,
      imagen:"assets/img/samsA14.jpeg",
      oferta:false,
      cantidad:0,
    },
     {
      marca:"Motorola",
      modelo:"Edge 30 neo",
      precio:350000,
      stock:20,
      imagen:"assets/img/motorEdge30Neo.jpeg",
      oferta:false,
      cantidad:0,
    },
         {
      marca:"Motorola",
      modelo:"G200",
      precio:520000,
      stock:15,
      imagen:"assets/img/motorG200.jpeg",
      oferta:true,
      cantidad:0,
    },
  ];

  aumentarCantidad(celular:ICelular):void{
celular.cantidad++;
  }
  disminuirCantidad(celular:ICelular):void{
   celular.cantidad++; 
  }

}
