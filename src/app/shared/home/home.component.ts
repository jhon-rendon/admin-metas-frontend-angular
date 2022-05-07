import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rutaActual:string;
  constructor(private router: Router) { 
      this.rutaActual = this.router.url;//Obtener la Ruta Actual
  }

  ngOnInit(): void {
  }

}
