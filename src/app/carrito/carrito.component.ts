import { Component, OnInit } from '@angular/core';
import { CelularCarritoService } from '../celular-carrito.service';
import { ICelular } from '../celular-list/Celular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent implements OnInit{
 listaDelCarrito$:Observable<ICelular[]>;
  constructor(private carrito:CelularCarritoService ){

   this.listaDelCarrito$= carrito.listaCarrito.asObservable();
}
ngOnInit(): void {
    
}
}
