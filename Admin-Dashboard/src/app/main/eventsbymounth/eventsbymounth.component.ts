import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-eventsbymounth',
  templateUrl: './eventsbymounth.component.html',
  styleUrls: ['./eventsbymounth.component.scss']
})
export class EventsbymounthComponent {
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Events by month'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: 'Number of events'
      }
    },
    series: [
      {
        name: 'Events',
        type: 'line',
        data: [0, 2, 1, 4, 7, 5, 6, 10, 11, 10, 9, 12]
      }
    ],
    credits :{
      enabled: false
    }
    }
  );

}
