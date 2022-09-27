import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  initLogin:boolean = false;

  constructor( private authService: AuthService,
               private router:Router) { }

  ngOnInit(): void {
  }


  ingresar( form: NgForm ) {

    //console.log( form.valid );
    //console.log( form.value );

    if( !form.valid ){
      return;
    }
    this.initLogin = true;
    this.authService.login( form.value.documento, form.value.clave )
        .subscribe( loginValid =>  {
          this.initLogin = false;
          this.router.navigate(['/']);
        }, err => {
          console.log('error',err);
          console.log(err.error.msg);
        // Entra aquí si el servicio entrega un código http de error EJ: 404, 
        this.initLogin = false;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.msg,
        });
        
       });
          

  }
}
