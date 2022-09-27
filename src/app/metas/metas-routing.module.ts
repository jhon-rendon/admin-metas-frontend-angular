import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './pages/general/general.component';
import { CentrocostoComponent } from './pages/centrocosto/centrocosto.component';
import { VendedorComponent } from './pages/vendedor/vendedor.component';
import { HomeComponent } from '../shared/home/home.component';
import { LoginGuard } from '../auth/services/guards/login.guard';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    canActivate: [ LoginGuard ],
    children:[
      {
        path:'general',
        canActivate: [ LoginGuard ],
        component:GeneralComponent
      },
      {
        path:'centro-costo',
        canActivate: [ LoginGuard ],
        component:CentrocostoComponent
      },
      {
        path:'vendedor',
        canActivate: [ LoginGuard ],
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
