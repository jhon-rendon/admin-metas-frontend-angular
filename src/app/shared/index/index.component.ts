import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

// EXPLICITLY IMPORT MODULE from node_modules
import zingchart from 'zingchart/es6';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    
  };
  public barChartLabels = ['ASTRO', 'CHANCE','CHMILLO','DBCHANCE','LOTERIA','RECARGA'];
  public barChartType:ChartType = 'bar';
  public barChartLegend = false;
  public barChartData = [
    {
     data: [75, 49, 89, 31, 86, 35], 
     backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
     //barPercentage: 1.0,
     //categoryPercentage: 1.0
    },
   // {data: [48, 38, 65, 39, 66, 17, 80], label: 'Series B'}
  ];

  /*config:zingchart.graphset = {
    type: 'line',
    series: [{
      values: [3,6,4,6,4,6,4,6]
    }],
  };*/

  
  config:zingchart.graphset = {
    type: 'bar',
    series: [{
      values: [80,90,70,60,50,40,30,69],
    }],
    "scaleX": {
      "values":['ASTRO', 'CHANCE','CHMILLO','DBCHANCE','LOTERIA','RECARGA'],
    },
    "scaleY":{
      label: {
        text: "% Cumplimiento Mes"
      },
    },
  
            "background-color": "white",
            "title": {
              "font-color": "#7E7E7E",
              "backgroundColor": "none",
              "font-size": "22px",
              "alpha": 1,
              "adjust-layout": true
            },
            "plotarea": {
              "margin": "dynamic"
            },
            "plot": {
              "rules": [
                {
                  "rule": "%v <=94",
                  "background-color": "#F24949"
                },
                {
                  "rule": "%v > 94 && %v <= 99 ",
                  "background-color": "#D7D95C"
                },
                {
                  "rule": "%v >=100 ",
                  "background-color": "#71C57D"
                }
              ],
              "bars-space-left": 0.15,
              "bars-space-right": 0.15,
              "animation": {
               // "effect": "ANIMATION_SLIDE_BOTTOM",
                "sequence": 0,
                "speed": 800,
                "delay": 800
              },
              "value-box": {
                "text": "%v%",
                "placement": "middle",
                "font-color": "white",
                "fontSize": 20,
                "font-weight": "normal"
              }
            },
            "labels": [
              {
                "text": "34 M",
                "background-color": "#d8e6fc",
                "font-size": "17px",
                "font-family": "arial",
                "font-weight": "bold",
                "font-color": "#021634",
                "padding": "10%",
                "border-radius": "3px",
                "offset-y": -30,
                "shadow": false,
                "callout": true,
                "callout-height": "10px",
                "callout-width": "15px",
                "hook": "node:plot=0;index=0",
                "url": "https://172.16.20.4/inver-metas/reporte-detalle-zona.php?fecha=29/09/2022&grupoProducto=NA==&url=index"
              },
              {
                "text": "108 M",
                "background-color": "#d8e6fc",
                "font-size": "17px",
                "font-family": "arial",
                "font-weight": "bold",
                "font-color": "#021634",
                "padding": "10%",
                "border-radius": "3px",
                "offset-y": -30,
                "shadow": false,
                "callout": true,
                "callout-height": "10px",
                "callout-width": "15px",
                "hook": "node:plot=0;index=1",
                "url": "https://172.16.20.4/inver-metas/reporte-detalle-zona.php?fecha=29/09/2022&grupoProducto=MQ==&url=index"
              },
              {
                "text": "2 M",
                "background-color": "#d8e6fc",
                "font-size": "17px",
                "font-family": "arial",
                "font-weight": "bold",
                "font-color": "#021634",
                "padding": "10%",
                "border-radius": "3px",
                "offset-y": -30,
                "shadow": false,
                "callout": true,
                "callout-height": "10px",
                "callout-width": "15px",
                "hook": "node:plot=0;index=2",
                "url": "https://172.16.20.4/inver-metas/reporte-detalle-zona.php?fecha=29/09/2022&grupoProducto=Ng==&url=index"
              },
              {
                "text": "14 M",
                "background-color": "#d8e6fc",
                "font-size": "17px",
                "font-family": "arial",
                "font-weight": "bold",
                "font-color": "#021634",
                "padding": "10%",
                "border-radius": "3px",
                "offset-y": -30,
                "shadow": false,
                "callout": true,
                "callout-height": "10px",
                "callout-width": "15px",
                "hook": "node:plot=0;index=3",
                "url": "https://172.16.20.4/inver-metas/reporte-detalle-zona.php?fecha=29/09/2022&grupoProducto=NQ==&url=index"
              },
              {
                "text": "1 M",
                "background-color": "#d8e6fc",
                "font-size": "17px",
                "font-family": "arial",
                "font-weight": "bold",
                "font-color": "#021634",
                "padding": "10%",
                "border-radius": "3px",
                "offset-y": -30,
                "shadow": false,
                "callout": true,
                "callout-height": "10px",
                "callout-width": "15px",
                "hook": "node:plot=0;index=4",
                "url": "https://172.16.20.4/inver-metas/reporte-detalle-zona.php?fecha=29/09/2022&grupoProducto=Mw==&url=index"
              },
              {
                "text": "27 M",
                "background-color": "#d8e6fc",
                "font-size": "17px",
                "font-family": "arial",
                "font-weight": "bold",
                "font-color": "#021634",
                "padding": "10%",
                "border-radius": "3px",
                "offset-y": -30,
                "shadow": false,
                "callout": true,
                "callout-height": "10px",
                "callout-width": "15px",
                "hook": "node:plot=0;index=5",
                "url": "https://172.16.20.4/inver-metas/reporte-detalle-zona.php?fecha=29/09/2022&grupoProducto=Mg==&url=index"
              }
            ],
            "scale-y": {
              "line-color": "#7E7E7E",
              "item": {
                "font-color": "#7e7e7e"
              },
              "guide": {
                "visible": true
              },
              "label": {
                "text": "%Cumplimiento Dia",
                "font-family": "arial",
                "bold": true,
                "font-size": "17px",
                "font-color": "#7E7E7E"
              }
            },
           
            "tooltip": {
              "visible": false
            },
            "crosshair-x": {
              "line-width": "100%",
              "alpha": 0.18,
              "plot-label": {
                //"header-text": "% Meta %kv "
              }
            },
            
          
          
          };
        //]
     // };
      

     
    /*plot: {
      valueBox: {
        text: "500 M",
        backgroundColor: 'black',
        rules: [{
          rule: '%stack-top == 0'
        }]
      }
    },*/
 
  //};

  constructor() { }

  ngOnInit(): void {
  }

}
