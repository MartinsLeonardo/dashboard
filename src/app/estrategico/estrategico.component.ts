import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estrategico',
  templateUrl: './estrategico.component.html',
  styleUrls: ['./estrategico.component.css']
})
export class EstrategicoComponent implements OnInit {
  
  avaliadores = 50;
  mediaAvaliadores = 150;


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

    this.dataSource4={
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

    this.dataSource2={
      "chart": {
        "caption": "Social Media Platforms Popularity",
        "subCaption": "2012-2016",
        "theme": "hulk-light",
        "showhovereffect": "1",
        "xAxisName": "Years",
        "showValues": "0",
        "numbersuffix": "%",
        "drawCrossLine": "1",
        "crossLineAlpha": "100",
        "crossLineColor": "#cc3300"
      },
      "categories": [{
        "category": [{
            "label": "2012"
          }, {
            "label": "2013"
          }, {
            "label": "2014"
          }, {
            "label": "2015"
          }, {
            "label": "2016"
          }

        ]
      }],
      "dataset": [{
        "seriesname": "Facebook",
        "anchorBgColor": "#876EA1",
        "data": [{
            "value": "62"
          }, {
            "value": "64"
          }, {
            "value": "64"
          }, {
            "value": "66"
          }, {
            "value": "78"
          }

        ]
      }, {
        "seriesname": "Instagram",
        "anchorBgColor": "#72D7B2",
        "data": [{
          "value": "16"
        }, {
          "value": "18"
        }, {
          "value": "24"
        }, {
          "value": "26"
        }, {
          "value": "32"
        }]
      }, {
        "seriesname": "LinkedIn",
        "anchorBgColor": "#77BCE9",
        "data": [{
          "value": "20"
        }, {
          "value": "22"
        }, {
          "value": "27"
        }, {
          "value": "22"
        }, {
          "value": "29"
        }]
      }, {
        "seriesname": "Twitter",
        "anchorBgColor": "#E5B556",
        "data": [{
          "value": "18"
        }, {
          "value": "19"
        }, {
          "value": "21"
        }, {
          "value": "21"
        }, {
          "value": "24"
        }]
      }]
    }


    this.dataSource={
      "chart": {
        "caption": "Top Global Oil Reserves",
        "subCaption":"[2015-16]",
        "xAxisName": "MMbbl= One Million barrels",
        "yAxisName": "Reserves (MMbbl)",
        // extra attributes  
        "numberSuffix": "K",
        "showValues": "0",
        "paletteColors": "#81BB76", 
        "showHoverEffect": "1",
        "use3DLighting": "0",
        "showaxislines": "1",
        "theme": "hulk-light",
      },
      "data": [{
        "label": "Venezuela",
        "value": "290"
      }, {
        "label": "Saudi",
        "value": "260"
      }, {
        "label": "Canada",
        "value": "180"
      }, {
        "label": "Iran",
        "value": "140"
      }, {
        "label": "Russia",
        "value": "115"
      }, {
        "label": "UAE",
        "value": "100"
      }, {
        "label": "US",
        "value": "30"
      }, {
        "label": "China",
        "value": "30"
      }]
    }
  }

  ngOnInit() {
  }

}
