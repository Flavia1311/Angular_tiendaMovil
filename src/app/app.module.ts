import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CelularListComponent } from './celular-list/celular-list.component';
import { FormsModule } from '@angular/forms';
import { CarritoComponent } from './carrito/carrito.component';
import { TiendaMovilCelularesComponent } from './tienda-movil-celulares/tienda-movil-celulares.component';
import { TiendaMovilAboutComponent } from './tienda-movil-about/tienda-movil-about.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    CelularListComponent,
    CarritoComponent,
    TiendaMovilCelularesComponent,
    TiendaMovilAboutComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
