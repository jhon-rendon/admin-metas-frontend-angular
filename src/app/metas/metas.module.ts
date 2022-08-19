import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GeneralComponent } from './pages/general/general.component';
import { CentrocostoComponent } from './pages/centrocosto/centrocosto.component';
import { VendedorComponent } from './pages/vendedor/vendedor.component';
import { MetasRoutingModule } from './metas-routing.module';
import { NumeroMesPipe } from './pipes/numero-mes.pipe';






@NgModule({
  declarations: [
    GeneralComponent,
    CentrocostoComponent,
    VendedorComponent,
    NumeroMesPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MetasRoutingModule
    
  ]
})
export class MetasModule { }
