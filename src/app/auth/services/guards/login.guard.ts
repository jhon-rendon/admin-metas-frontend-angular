import { Injectable } from '@angular/core';
import {  Router, CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanLoad {
  
  constructor( private authService: AuthService,
               private router: Router ){

  }
  canActivate():Observable<boolean> | boolean{

    /*if( this.authService.estaLogueado() ){
        console.log('PASO EL GUARD');
      return true;
    }else{
      console.log('bLOQUEDO POR EL GUARD');
      this.router.navigate(['auth/login']);
      return false;
    }*/
    console.log('canActivate');

    return this.authService.validarToken()
      .pipe(
        tap( valid => {
          if( !valid ){
            this.authService.logouth();
          }
        })
      );
  }

  canLoad():Observable<boolean> | boolean{

    /*if( this.authService.estaLogueado() ){
        console.log('PASO EL GUARD');
      return true;
    }else{
      console.log('bLOQUEDO POR EL GUARD');
      this.router.navigate(['auth/login']);
      return false;
    }*/
    console.log('canLoad');
    this.authService.validarToken()
      .subscribe( console.log);

   return this.authService.validarToken()
      .pipe(
        tap( valid => {
          if( !valid ){
            //this.router.navigateByUrl('/auth/login');
            this.authService.logouth();
          }
        })
      );
  }
  
}
