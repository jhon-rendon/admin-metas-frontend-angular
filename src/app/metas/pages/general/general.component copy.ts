import { AfterViewInit, Component, OnInit ,VERSION} from '@angular/core';
import { MetasService } from '../../services/meta_general.service';

import * as XLSX from 'xlsx';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit,AfterViewInit {
  
  public listadoPorcentajeMetas:any = [];
  public load:boolean = false;
  public listadoProductos:any = [];

  constructor( private serviceMetas:MetasService) {
     this.listarData();

  
  }

  async listarData(){
    
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
   }


  ngOnInit(): void {
    //console.log('resp2',this.listadoPorcentajeMetas);
    //this.listadoPorcentajeMetas = metas;
    //console.log('resp',this.listadoPorcentajeMetas);

   // this.listadoPorcentajeMetas = this.listadoPorcentajeMetas.flat();

  }

  ngAfterViewInit(): void {
    //console.log('resp3',this.listadoPorcentajeMetas);
  }

  name = 'ExcelSheet.xlsx';
  exportToExcel(): void {
    let element = document.getElementById('listado');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }

}
function listarData() {
  throw new Error('Function not implemented.');
}

