import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

const URL = environment.URL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient ,
               private router:Router) { }

  login( usuario:string, password: string ){

    //console.log(usuario);
    //console.log(password);
    return this.http.post(`${ URL }/auth/login`, { usuario,password})
          .pipe(
            map( (resp:any) => {
              localStorage.setItem('documento',resp.documento);
              localStorage.setItem('token', resp.token );

              return true;
            })
          );

    
  }


  /*estaLogueado( ){
    console.log(localStorage.getItem('token'));
    if( localStorage.getItem('token') ){
      return localStorage.getItem('token')!.length > 5 ? true: false;
    }
    else{
      return false;
    }
   // return ( localStorage.getItem('token')!.length > 5 ? true: false);
  }*/

  logouth(){

    localStorage.removeItem('token');
    localStorage.removeItem('documento');

    this.router.navigate(['auth//login']);

  }


  validarToken():Observable<boolean>{

    const headers = new HttpHeaders()
    .set('x-token',localStorage.getItem('token') || '');

    return this.http.get(`${ URL }/auth/validartoken`,{ headers } )
      .pipe(
        map( (resp:any) => {

          return resp.success;
        }),
        catchError( err => of( false ))
      );
  }
}
