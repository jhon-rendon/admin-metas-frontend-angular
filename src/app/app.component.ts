import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  public prueba:string;

  constructor(){
    this.prueba = 'Hola Mundo';
  }
}
