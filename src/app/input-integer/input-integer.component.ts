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

  @Output()
  maxAlcanzado:EventEmitter<string>=new EventEmitter<string>();

  aumentarCantidad() {
    if (this.cantidad<this.max){
     this.cantidad++;
    this.cantidadChange.emit(this.cantidad);   
    }
    else{
    this.maxAlcanzado.emit("se alcanzo el max");
    }
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
