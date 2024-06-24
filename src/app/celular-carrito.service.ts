import { Injectable } from '@angular/core';
import { ICelular } from './celular-list/Celular';

@Injectable({
  providedIn: 'root'
})
export class CelularCarritoService {

  listaDelCarrito: ICelular[]=[];

  agregarAlCarrito(celular: ICelular) {
   this.listaDelCarrito.push(celular);
   console.log(this.listaDelCarrito.length);
  }

  constructor() { }
  
}
