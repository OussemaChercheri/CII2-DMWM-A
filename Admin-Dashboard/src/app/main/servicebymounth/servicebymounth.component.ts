import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-servicebymounth',
  templateUrl: './servicebymounth.component.html',
  styleUrls: ['./servicebymounth.component.scss']
})
export class ServicebymounthComponent {
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Services by month'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: 'Number of services'
      }
    },
    series: [
      {
        name: 'Events',
        type: 'line',
        data: [0, 3, 5, 8, 8, 10, 9, 12, 15, 13, 14, 14]
      }
    ],
    credits: {
      enabled: false

    }
});


}
