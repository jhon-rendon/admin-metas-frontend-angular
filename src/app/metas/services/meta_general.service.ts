import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const URL = environment.URL;

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

    //console.log(localStorage.getItem('token'));
    const headers = new HttpHeaders()
    .set('x-token',localStorage.getItem('token') || '');

    return this.http.post(`${ URL }/meta-general/listar`,
      {},
      { headers }
    );

  }

  
  getlistadoMetaGeneralByAnio( anio: number ){

    console.log('Listar Metas Por año');
    const headers = new HttpHeaders()
    .set('x-token',localStorage.getItem('token') || '');
     
    return this.http.post(`${ URL }/meta-general/listar`,
      {anio},
      { headers}
    );

  }

  getlistadoProductos(){

      return this.http.post(`${ URL }/meta-general`,{
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
    return this.http.post(`${ URL }http://localhost:8080/meta-general/guardar`,{
      data:dataJson
    });
  }
  
}

