/// <reference path="../../../tsd.d.ts" />

import {
  Component, View, EventEmitter,
} from 'angular2/core';

import {NgClass, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common';

import {charts} from '../../../components/index';

// webpack html imports
let template = require('./doughnut-chart-demo.html');

@Component({
  selector: 'doughnut-chart-demo'
})
@View({
  template: template,
  directives: [charts, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class DoughnutChartDemo {

  constructor() {
    console.log('doughnut demo');
  }

  // events
  chartClicked(e:any) {
    console.log(e);
  }

  chartHovered(e:any) {
    console.log(e);
  }

  // Doughnut
  private doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  private doughnutChartData = [350, 450, 100];
  private doughnutChartType = 'Doughnut';

}
