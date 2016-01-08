/// <reference path="../../../tsd.d.ts" />

import {
  Component, View, EventEmitter,
} from 'angular2/core';

import {NgClass, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common';

import {charts} from '../../../components/index';

// webpack html imports
let template = require('./polar-area-chart-demo.html');

@Component({
  selector: 'polar-area-chart-demo'
})
@View({
  template: template,
  directives: [charts, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class PolarAreaChartDemo {

  constructor() {
    console.log('PolarArea demo');
  }

  // events
  chartClicked(e:any) {
    console.log(e);
  }
  chartHovered(e:any) {
    console.log(e);
  }

  // PolarArea
  private polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  private polarAreaChartData = [300, 500, 100, 40, 120];
  private polarAreaLegend:boolean = true;

  private polarAreaChartType = 'PolarArea';
  private polarAreaChartColours = [
    {
      fillColor: 'rgba(151,187,205,0.2)',
      strokeColor: 'rgba(151,187,205,1)',
      pointColor: 'rgba(151,187,205,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(151,187,205,0.8)',
      color: 'rgba(151,187,205,1)',
      highlight: 'rgba(151,187,205,0.8)'
    }, {
      fillColor: 'rgba(220,220,220,0.2)',
      strokeColor: 'rgba(220,220,220,1)',
      pointColor: 'rgba(220,220,220,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(220,220,220,0.8)',
      color: 'rgba(220,220,220,1)',
      highlight: 'rgba(220,220,220,0.8)'
    },
    {
      fillColor: 'rgba(247,70,74,0.2)',
      strokeColor: 'rgba(247,70,74,1)',
      pointColor: 'rgba(247,70,74,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(247,70,74,0.8)',
      color: 'rgba(247,70,74,1)',
      highlight: 'rgba(247,70,74,0.8)'
    }
  ];

}
