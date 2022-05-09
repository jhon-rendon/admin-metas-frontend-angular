import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import MetisMenu from 'metismenujs';

//let metisMenu = require('../../../assets/plugins/metismenu/metisMenu.min.js');

//declare const metisMenu;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rutaActual:string;
  constructor(private router: Router) { 
      this.rutaActual = this.router.url;//Obtener la Ruta Actual
      //show.metisMenu
      
  }

  ngOnInit(): void {
      //$("#metismenu").metisMenu();
      //MetisMenu.attach("#metismenu");
      //new MetisMenu("#menu");
    //console.log('Ejecutado');
    //MetisMenu.show();
    
      
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    
  }

}
