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
        "caption": "Web Servers Market Share",
        "subCaption": "2015-16",
         "plottooltext": "<div id='nameDiv'> <b>$label</b><br/><b>Market Share Percentage : </b>$percentValue<br/></div>",
        "showLegend": "1",   
        "legendPosition":"right",
        "startingAngle":"300",
        "alignCaptionWithCanvas": "0",
       "useDataPlotColorForLabels": "1",
       "theme":"hulk-light",
      },
      "data": [{
        "label": "Apache",
        "value": "32647479"
      }, {
        "label": "Microsoft",
        "value": "22100932"
      }, {
        "label": "Zeus",
        "value": "14376"
      }, {
        "label": "Other",
        "value": "18674221"
      }]
    }


    this.dataSource ={
      "chart": {
          "caption": "Stock Price",
          "subcaption": "Last month",
          "numberPrefix": "$",
          "canvasleftmargin": "145",
          "chartTopMargin": "10",
          "chartRightMargin": "10",
          "showBorder": "0"
      },
      "dataset": [
          {
              "data": [
                {
                  "label": "Mês 1",
                  "value": "89.45"
                }, {
                  "label": "Mês 2",
                  "value": "15.87"
                }, {
                  "label": "Mês 3",
                  "value": "89.64"
                }
              ]
          }
      ]
  }
   }

  ngOnInit() {
  }

}
