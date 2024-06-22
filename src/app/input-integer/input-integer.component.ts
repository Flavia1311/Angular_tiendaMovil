import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {
  @Input()
  cantidad!: number;   

  @Input()
  max!:number;

  @Output()
  cantidadChange:EventEmitter<number>=new EventEmitter<number>();

  aumentarCantidad() {
    if (this.cantidad<this.max)
     this.cantidad++;
    this.cantidadChange.emit(this.cantidad);
  }

  disminuirCantidad() {
    if ( this.cantidad > 0) {
      this.cantidad--;
        this.cantidadChange.emit(this.cantidad);
    }
  }

  cambiarCantidad(event: { key: any; }){
console.log(event.key);
  this.cantidadChange.emit(this.cantidad);
  }

}
