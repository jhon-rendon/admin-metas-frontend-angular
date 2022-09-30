import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginGuard } from './auth/services/guards/login.guard';

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
    canActivate: [ LoginGuard ],
    canLoad: [ LoginGuard ],
    component:HomeComponent,
    
  },
  /*{
    path:'metas',
    loadChildren:() => import('./metas/metas.module').then ( m => m.MetasModule )
  }*/
  {
    path:'metas',
    canActivate: [ LoginGuard ],
    canLoad: [ LoginGuard ],
    loadChildren:() => import('./metas/metas.module').then( m => m.MetasModule )
  },
  {
    path: '**',
    redirectTo: '404'
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
