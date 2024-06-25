import { Component, OnInit } from '@angular/core';
import { ICelular } from './Celular';
import { CelularCarritoService } from '../celular-carrito.service';

@Component({
  selector: 'app-celular-list',
  templateUrl: './celular-list.component.html',
  styleUrl: './celular-list.component.scss',
})
export class CelularListComponent implements OnInit {
  celulares: Array<ICelular> = [
    {
      marca: "Samsung",
      modelo: "A04",
      precio: 250000,
      stock: 60,
      imagen: "assets/img/samsA04.jpeg",
      oferta: true,
      cantidad: 2,
    },
    {
      marca: "Samsung",
      modelo: "A14",
      precio: 250000,
      stock: 30,
      imagen: "assets/img/samsA14.jpeg",
      oferta: false,
      cantidad: 0,
    },
    {
      marca: "Motorola",
      modelo: "Edge 30 neo",
      precio: 350000,
      stock: 20,
      imagen: "assets/img/motorEdge30Neo.jpeg",
      oferta: false,
      cantidad: 0,
    },
    {
      marca: "Motorola",
      modelo: "G200",
      precio: 520000,
      stock: 15,
      imagen: "assets/img/motorG200.jpeg",
      oferta: true,
      cantidad: 0,
    },
  ]

    ngOnInit(): void {

  } 
constructor(private carrito:CelularCarritoService){

}


agregarAlCarrito(celular: any):void{
this.carrito.agregarAlCarrito(celular);
celular.stock-=celular.cantidad;
celular.cantidad=0;
}

maxAlcanzado(m: string){
  alert(m);
}


}
