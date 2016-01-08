/// <reference path="../../../tsd.d.ts" />

import {
  Component, View, EventEmitter,
} from 'angular2/core';

import {NgClass, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common';

import {charts} from '../../../components/index';

// webpack html imports
let template = require('./radar-chart-demo.html');

@Component({
  selector: 'radar-chart-demo'
})
@View({
  template: template,
  directives: [charts, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class RadarChartDemo {

  constructor() {
    console.log('radar demo');
  }

  // events
  chartClicked(e:any) {
    console.log(e);
  }

  chartHovered(e:any) {
    console.log(e);
  }

  // Radar
  private radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
  private radarChartData = [
    [65, 59, 90, 81, 56, 55, 40],
    [28, 48, 40, 19, 96, 27, 100]
  ];
  private radarChartType = 'Radar';

}
