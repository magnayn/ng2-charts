/// <reference path="../../../tsd.d.ts" />

import {
  Component, View, EventEmitter,
} from 'angular2/core';

import {NgClass, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common';

import {charts} from '../../../components/index';

// webpack html imports
let template = require('./pie-chart-demo.html');

@Component({
  selector: 'pie-chart-demo'
})
@View({
  template: template,
  directives: [charts, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class PieChartDemo {

  constructor() {
    console.log('pie demo');
  }

  // events
  chartClicked(e:any) {
    console.log(e);
  }

  chartHovered(e:any) {
    console.log(e);
  }

  // Pie
  private pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  private pieChartData = [300, 500, 100];
  private pieChartType = 'Pie';

}
