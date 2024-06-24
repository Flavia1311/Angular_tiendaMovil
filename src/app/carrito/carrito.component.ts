import { Component } from '@angular/core';
import { CelularCarritoService } from '../celular-carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  constructor(private carrito:CelularCarritoService){

}

}
