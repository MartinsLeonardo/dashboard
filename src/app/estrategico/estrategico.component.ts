import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estrategico',
  templateUrl: './estrategico.component.html',
  styleUrls: ['./estrategico.component.css']
})
export class EstrategicoComponent implements OnInit {
  
  avaliadores = 150;
  mediaAvaliadores = 120;


  type = 'column2d';
  dataFormat = 'json';
  dataSource;

  type2 = 'msline';
  dataFormat2 = 'json';
  dataSource2;

  type3='pie2d';
  dataFormat3 = 'json';
  dataSource3;

  type4='pie2d';
  dataFormat4 = 'json';
  dataSource4;

  constructor() { 

    this.dataSource3={
      "chart": {
       
         "plottooltext": "<div id='nameDiv'> <b>$label</b><br/><b>Market Share Percentage : </b>$percentValue<br/></div>",
        "showLegend": "1",   
        "legendPosition":"right",
        "startingAngle":"300",
        "alignCaptionWithCanvas": "0",
       "useDataPlotColorForLabels": "1",
       "theme":"hulk-light",
      },
      "data": [{
        "label": "Eu",
        "value": "6"
      }, {
        "label": "Concorrente",
        "value": "4"
      }]
    }

    this.dataSource4={
      "chart": {
       
         "plottooltext": "<div id='nameDiv'> <b>$label</b><br/><b>Market Share Percentage : </b>$percentValue<br/></div>",
        "showLegend": "1",   
        "legendPosition":"right",
        "startingAngle":"300",
        "alignCaptionWithCanvas": "0",
       "useDataPlotColorForLabels": "1",
       "theme":"hulk-light",
      },
      "data": [{
        "label": "Eu",
        "value": "2"
      }, {
        "label": "Concorrente",
        "value": "8"
      }]
    }

    this.dataSource2={
      "chart": {
       
        "theme": "hulk-light",
        "showhovereffect": "1",
        "xAxisName": "Meses",
        "showValues": "0",
        "numbersuffix": "%",
        "drawCrossLine": "1",
        "crossLineAlpha": "100",
        "crossLineColor": "#cc3300"
      },
      "categories": [{
        "category": [{
            "label": "01"
          }, {
            "label": "02"
          }, {
            "label": "03"
          }, {
            "label": "04"
          }, {
            "label": "05"
          }

        ]
      }],
      "dataset": [{
        "seriesname": "Boas",
        "anchorBgColor": "#876EA1",
        "data": [{
            "value": "14"
          }, {
            "value": "23"
          }, {
            "value": "17"
          }, {
            "value": "22"
          }, {
            "value": "18"
          }

        ]
      }, {
        "seriesname": "Ruins",
        "anchorBgColor": "#72D7B2",
        "data": [{
          "value": "4"
        }, {
          "value": "6"
        }, {
          "value": "3"
        }, {
          "value": "5"
        }, {
          "value": "5"
        }]
      }, {
        "seriesname": "Médias",
        "anchorBgColor": "#77BCE9",
        "data": [{
          "value": "30"
        }, {
          "value": "22"
        }, {
          "value": "27"
        }, {
          "value": "22"
        }, {
          "value": "29"
        }]
      }]
    }


    this.dataSource={
      "chart": {
        "xAxisName": "Concorrentes",
        "yAxisName": "Porcentagem de Boas Avaliações",
        // extra attributes  
        "showValues": "0",
        "paletteColors": "#81BB76", 
        "showHoverEffect": "1",
        "use3DLighting": "0",
        "showaxislines": "1",
        "theme": "hulk-light",
      },
      "data": [{
        "label": "Concorrente 1",
        "value": "8"
      }, {
        "label": "Concorrente 2",
        "value": "7"
      }, {
        "label": "Concorrente 3",
        "value": "5"
      }, {
        "label": "Concorrente 4",
        "value": "3"
      }, {
        "label": "Concorrente 5",
        "value": "4"
      }]
    }
  }

  ngOnInit() {
  }

}
