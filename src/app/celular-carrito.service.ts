import { Injectable } from '@angular/core';
import { ICelular } from './celular-list/Celular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CelularCarritoService {
  private listaDelCarrito: ICelular[] = [];
  listaCarrito: BehaviorSubject<ICelular[]> = new BehaviorSubject<ICelular[]>(this.listaDelCarrito);

  constructor() { }

  agregarAlCarrito(celular: ICelular) {
    let item: ICelular | undefined = this.listaDelCarrito.find((v1) => v1.modelo === celular.modelo);
    if (!item) {
      this.listaDelCarrito.push({ ...celular }); // Crear una copia para evitar mutaciones
    } else {
      item.cantidad += celular.cantidad;
    }
    this.listaCarrito.next(this.listaDelCarrito); // Emitir los cambios
  }
}
