import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analitico',
  templateUrl: './analitico.component.html',
  styleUrls: ['./analitico.component.css']
})
export class AnaliticoComponent implements OnInit {
  type = 'line';
  dataFormat = 'json';
  dataSource;

  type2 = 'pie2d';
  dataFormat2 = 'json';
  dataSource2;

  constructor() {

    this.dataSource2={

      "chart": { 
        "showLegend": "1",   
        "legendPosition":"right",
        "startingAngle":"300",
        "alignCaptionWithCanvas": "0",
       "useDataPlotColorForLabels": "1",
       "theme":"hulk-light",
      },
      "data": [{
        "label": "Boa",
        "value": "38"
      }, {
        "label": "Ruim",
        "value": "18"
      }]
    }


    this.dataSource ={
      "chart": {
          "canvasleftmargin": "10",
          "chartTopMargin": "10",
          "chartRightMargin": "10",
          "showBorder": "0"
      },
      "dataset": [
          {
              "data": [
                {
                  "label": "Mês 1",
                  "value": "89"
                }, {
                  "label": "Mês 2",
                  "value": "15"
                }, {
                  "label": "Mês 3",
                  "value": "70"
                }
              ]
          }
      ]
  }
   }

  ngOnInit() {
  }

}
