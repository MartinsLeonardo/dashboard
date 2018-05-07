import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operacional',
  templateUrl: './operacional.component.html',
  styleUrls: ['./operacional.component.css']
})
export class OperacionalComponent implements OnInit {
  width = 600;
  height = 400;
  type = 'column2d';
  dataFormat = 'json';
  dataSource;

  constructor() { 
    this.dataSource = {
      "chart": {
          "caption": "Harry's SuperMart",
          "subCaption": "Top 5 stores in last month by revenue",
          "numberprefix": "$",
          "theme": "fint"
      },
      "data": [{
              "label": "Bakersfield Central",
              "value": "880000"
          },
          {
              "label": "Garden Groove harbour",
              "value": "730000"
          },
          {
              "label": "Los Angeles Topanga",
              "value": "590000"
          },
          {
              "label": "Compton-Rancho Dom",
              "value": "520000"
          },
          {
              "label": "Daly City Serramonte",
              "value": "330000"
          }
      ]
    }
  }
  ngOnInit() {
  }
}
