import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './pages/general/general.component';
import { CentrocostoComponent } from './pages/centrocosto/centrocosto.component';
import { VendedorComponent } from './pages/vendedor/vendedor.component';
import { HomeComponent } from '../shared/home/home.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'general',
        component:GeneralComponent
      },
      {
        path:'centro-costo',
        component:CentrocostoComponent
      },
      {
        path:'vendedor',
        component:VendedorComponent
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class MetasRoutingModule { }
