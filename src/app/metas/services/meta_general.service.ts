import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MetaGeneralService {

  constructor(private http:HttpClient) { }

  /*getMetaGeneral(){

    return this.http.post('http://localhost:8080/meta-general',{
      //tipoPeticion:['listadoProductos','metasGeneralActual']
      tipoPeticion:'pagePrincipal'
    });

  }

  getMetaGeneralByAnio( anio : number){

    return this.http.post('http://localhost:8080/meta-general', { 
        anio,
        tipoPeticion:'filtrarListado'
    });
  }*/


  getlistadoMetaGeneral(){

    return this.http.post('http://localhost:8080/meta-general',{
      //tipoPeticion:['listadoProductos','metasGeneralActual']
      tipoPeticion:'listadoMetasGeneral'
    });

  }

  
  getlistadoMetaGeneralByAnio( anio: number ){

    return this.http.post('http://localhost:8080/meta-general/listar',{
      //tipoPeticion:['listadoProductos','metasGeneralActual']
      //tipoPeticion:'listadoMetasGeneral',
      //anio
    });

  }

  getlistadoProductos(){

      return this.http.post('http://localhost:8080/meta-general',{
        //tipoPeticion:['listadoProductos','metasGeneralActual']
        tipoPeticion:'listadoProductos'
      });
  
  }

  /*insertMetaGeneral( dataJson:any ){
    console.log('Metodo insert');
    return this.http.post('http://localhost:8080/meta-general',{
      //tipoPeticion:['listadoProductos','metasGeneralActual']
      tipoPeticion:'insert',
      data:dataJson
    });
  }*/

  insertMetaGeneral( dataJson:any ){
    console.log('Metodo insert');
    return this.http.post('http://localhost:8080/meta-general/guardar',{
      data:dataJson
    });
  }
  
}

