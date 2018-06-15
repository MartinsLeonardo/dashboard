import { Component, OnInit } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-operacional',
  templateUrl: './operacional.component.html',
  styleUrls: ['./operacional.component.css']
})
export class OperacionalComponent implements OnInit {
  width = 600;
  height = 400;
  type = 'bar2D';
  dataFormat = 'json';
  dataSource;
  estado = 'TO';

  ngOnInit() {
   
  }

  alteraEstado(estado: string){
    this.estado = estado;
  }
  
  constructor() { 

    this.dataSource = {
      "chart": {
          "numberprefix": "",
          "theme": "fint"
      },
      "data": [{
              "label": "Girassol Plaza",
              "value": "98"
          },
          {
              "label": "Céu",
              "value": "72"
          },
          {
              "label": "Italian",
              "value": "59"
          },
          {
              "label": "Ibis",
              "value": "83"
          }
      ]
    }
  }
  
}
