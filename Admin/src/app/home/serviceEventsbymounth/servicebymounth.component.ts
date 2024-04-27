import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-servicebymounth',
  templateUrl: './servicebymounth.component.html',
  styleUrls: ['./servicebymounth.component.scss']
})
export class ServicebymounthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Highcharts.chart('service-events-container', {
      chart: {
        type: 'line',
        height: 325
      },
      title: {

        text: 'The progressive number of Events and Touristic Services by month',
        style: {
          fontSize: '20px'  
        }

      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        type: 'line',
        name: 'Events',
        data: [0, 4, 5, 5, 6, 6, 10, 14, 15, 15, 16, 17]
      },
      {
        type: 'line',
        name: 'Touristic Services',
        data: [0, 0, 5, 5, 10, 18, 20, 22, 24, 25, 30, 31]
      }],
      credits: {
        enabled: false
      }
    });
  }
}
