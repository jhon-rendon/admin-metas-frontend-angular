import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }


  getlistadoProductos(){

    return this.http.post('http://localhost:8080/productos',{
      //tipoPeticion:['listadoProductos','metasGeneralActual']
      tipoPeticion:'listar'
    });

}


}
