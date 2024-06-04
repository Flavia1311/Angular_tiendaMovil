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
      imagen:"assets/img/samsA04.jpeg"
    },
     {
      marca:"Samsung",
      modelo:"A14",
      precio:250000,
      stock:30,
      imagen:"assets/img/samsA14.jpeg"
    },
     {
      marca:"Motorola",
      modelo:"Edge 30 neo",
      precio:350000,
      stock:20,
      imagen:"assets/img/motor30neo.jpeg"
    },
  ];
}
