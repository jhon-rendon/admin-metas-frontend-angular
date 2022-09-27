import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor( private authService: AuthService,
               private router: Router ){

  }
  canActivate(){

    if( this.authService.estaLogueado() ){
        console.log('PASO EL GUARD');
      return true;
    }else{
      console.log('bLOQUEDO POR EL GUARD');
      this.router.navigate(['auth/login']);
      return false;
    }
  }
  
}
