import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './pages/general/general.component';
import { CentrocostoComponent } from './pages/centrocosto/centrocosto.component';
import { VendedorComponent } from './pages/vendedor/vendedor.component';
import { MetasRoutingModule } from './metas-routing.module';



@NgModule({
  declarations: [
    GeneralComponent,
    CentrocostoComponent,
    VendedorComponent
  ],
  imports: [
    CommonModule,
    MetasRoutingModule
  ]
})
export class MetasModule { }
