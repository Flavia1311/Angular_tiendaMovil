import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TiendaMovilCelularesComponent } from './tienda-movil-celulares/tienda-movil-celulares.component';
import { TiendaMovilAboutComponent } from './tienda-movil-about/tienda-movil-about.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'celulares',
    pathMatch: 'full',
  },
  { 
    path: 'celulares',
    component: TiendaMovilCelularesComponent,
  },
    { 
    path: 'about',
    component:TiendaMovilAboutComponent,
  },
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
