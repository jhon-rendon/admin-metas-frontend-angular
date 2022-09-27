import {  Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import Swal from'sweetalert2';
import { MetaGeneralService } from '../../services/meta_general.service';
import { ProductosService } from '../../services/productos.service';



import * as XLSX from 'xlsx';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {
  
  
  public listadoMetasGeneral :any = [];
  public load:boolean             = false;
  public listadoProductos:any     = [];
  public classValid               = '';
  public ultimoMesMeta:Number     = new Date().getMonth()+1;
  public ultimoAnioMeta           = new Date().getFullYear();

  
  /*miFormulario:FormGroup = new FormGroup({
    'porcentaje': new FormControl('valor')
  });*/

  miFormulario: FormGroup = this.fb.group({
    porcentaje: this.fb.array([
       [], Validators.required 
    ])
  });

  constructor( private serviceMetas:MetaGeneralService, 
               private serviceProductos: ProductosService,
               private fb: FormBuilder
              ){
     //this.listarData();
    this.listarProductos(); 
    this.listarMetasGeneral();
    /*this.listadoProductos["productos"] =[
      {  descripcion:'ASTRO', codigo : 1},
      {
        descripcion:'CHANCE MILLONARIO',
        codigo     : 2
      },
      {
        descripcion:'CHANCE',
        codigo     : 3
      },
      {
        descripcion:'DOBLE ACIERTO',
        codigo     : 4
      },
      {
        descripcion:'RECARGAS',
        codigo     : 5
      },
      {
        descripcion:'LOTERIAS',
        codigo     : 6
      }
      ];*/
  }


  listarProductos(){

    this.serviceProductos.getlistadoProductos()
        .subscribe( resp => {
            this.listadoProductos = resp;
        },
        (error) => {
            console.log("Productos error:",error);
        },
        ()=>{
        
        });

  }

   listarMetasGeneral(){
    this.serviceMetas.getlistadoMetaGeneral()
        .subscribe( resp => {
            this.listadoMetasGeneral = resp;
        },
        (error) => {
            console.log(error);
        },      //this.load = false;
        ()=>{
          //console.log( this.ultimoAnioMeta, this.ultimoMesMeta);
          let meses:any = [];
          this.listadoMetasGeneral.meta_general.forEach((array:any) => {
            console.log(`${array.mes}`);
            meses.push(array.mes);
        });
        
           meses = [... new Set(meses)];
 
         this.ultimoMesMeta = Math.max(...meses )+1;
    
          console.log( this.ultimoAnioMeta, this.ultimoMesMeta);
        });
  }

  async filtroAnio( event:any ){

    let anio = Number(event.target.value);
    this.listadoMetasGeneral = [];
    this.load = true;
    this.serviceMetas.getlistadoMetaGeneralByAnio( anio )
        .subscribe( resp => {
            this.listadoMetasGeneral = resp;
        },
        (error) => {
            console.log(error);
            this.load = false;
        },
        () => {
          console.log('Peticion Completada');
           this.load = false;
        });
  }

  guardarMetaGeneral( miFormulario:NgForm ){

    //console.log('insertar',miFormulario.value);

    let dataPorcentajes = [];
    let json;
    let camposVacios    = false; 

    for (const [key, value] of Object.entries(miFormulario.value)) {
      //console.log(`${key}: ${value}`);
      if( value === ''){
        //camposVacios = true;
        /*Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Todos los campos son obligatorios',
          //footer: '<a href="">Why do I have this issue?</a>'
        });
        return;*/
      }
      dataPorcentajes.push({
        codigo_producto: key,
        porcentaje     : value,
        anio: 2022
        
      });
    }

    /*if( camposVacios ){
      console.log('No pueden existir campos vacios');
      //Swal.fire('No pueden existir campos vacios...', 'Mensaje', 'success');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios',
        //footer: '<a href="">Why do I have this issue?</a>'
      })
      
      //this.classValid = 'input-error';
      return;
    }*/

    json = {
      //anio : 'sdsfd',
      //mes  : this.ultimoMesMeta,
      dataPorcentajes
    }
    let respuesta:any;
    this.serviceMetas.insertMetaGeneral(  json )
        .subscribe( resp => {
          console.log( resp);
          respuesta = resp;
        },
        (error) =>{
          console.log('error',error);
        },
        ()=>{
          console.log('complete'); 
          if( respuesta.status == true ){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Registros guardados satisfactoriamente',
              showConfirmButton: false,
              timer: 1500
            })
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: ''+respuesta.errores,
              //footer: '<a href="">Why do I have this issue?</a>'
            });
          }
        });

   
    /*for(let i in miFormulario.value) {
      //console.log(i); // key
      //console.log(miFormulario.value[i]); // value against the key

      dataPorcentajes.push({
        codigo_producto: i,
        porcentaje     : miFormulario.value[i]
      });
    }*/
    console.log( 'formEnviado',json);
  }

  /*async listarData(){
    
    this.listadoPorcentajeMetas = [];
    let metas:any = [];
    this.load = true;
    this.serviceMetas.getMetaGeneral()
      .subscribe(resp => {


        this.listadoPorcentajeMetas = resp;

        //console.log('resp1',this.listadoPorcentajeMetas);
      }, (error) => {
        console.log(error);
        this.load = false;
      },
        () => {
          console.log("Complete");
          this.load = false;
          //this.listadoPorcentajeMetas.productos = this.listadoProductos;
          this.listadoProductos = this.listadoPorcentajeMetas.productos;

          console.log('productos: ', this.listadoProductos);
        }

      );
 
   }

   filtroAnio(event:any){
    console.log(event.target.value);

    let anio = event.target.value;

    this.listadoPorcentajeMetas = [];
    let metas:any = [];
    this.load = true;
    this.serviceMetas.getMetaGeneralByAnio( anio )
    .subscribe( resp =>  {

     
      console.log( resp); 
      metas =  resp;

      this.listadoPorcentajeMetas = resp;
     

      //this.listadoPorcentajeMetas.productos = this.listadoProductos;
    
      console.log( 'productos: ',this.listadoProductos);

      console.log('resp1',this.listadoPorcentajeMetas);
    },(error) => {
      console.log(error);
      this.load = false;
    },
    () => {
      console.log("Complete");
      this.load = false;
    }

    );
   }*/


  name = 'ExcelSheet.xlsx';
  exportToExcel(): void {
    let element = document.getElementById('listado');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }

}


