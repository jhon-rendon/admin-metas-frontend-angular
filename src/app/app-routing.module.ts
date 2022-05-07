import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:() => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path:'404',
    component:ErrorPageComponent
  },
  /*{
    path:'**',
    component:ErrorPageComponent
  }*/
  {
    path:'',
    component:HomeComponent
  },
  /*{
    path:'metas',
    loadChildren:() => import('./metas/metas.module').then ( m => m.MetasModule )
  }*/
  {
    path:'metas',
    loadChildren:() => import('./metas/metas.module').then( m => m.MetasModule )
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
