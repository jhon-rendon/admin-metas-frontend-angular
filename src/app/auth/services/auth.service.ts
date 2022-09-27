import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient ,
               private router:Router) { }

  login( usuario:string, password: string ){

    //console.log(usuario);
    //console.log(password);
    return this.http.post('http://localhost:8080/auth/login', { usuario,password})
          .pipe(
            map( (resp:any) => {
              localStorage.setItem('documento',resp.documento);
              localStorage.setItem('token', resp.token );

              return true;
            })
          );

    
  }


  estaLogueado( ){
    console.log(localStorage.getItem('token'));
    if( localStorage.getItem('token') ){
      return localStorage.getItem('token')!.length > 5 ? true: false;
    }
    else{
      return false;
    }
   // return ( localStorage.getItem('token')!.length > 5 ? true: false);
  }

  logouth(){

    localStorage.removeItem('token');
    localStorage.removeItem('documento');

    this.router.navigate(['auth//login']);

  }
}
