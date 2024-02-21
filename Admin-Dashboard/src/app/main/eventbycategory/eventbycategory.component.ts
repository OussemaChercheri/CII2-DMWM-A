import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-eventbycategory',
  templateUrl: './eventbycategory.component.html',
  styleUrls: ['./eventbycategory.component.scss']
})
export class EventbycategoryComponent {

  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Event by Category'
    },
    xAxis: {
      categories: ['Sport', 'Concert', 'Wedding', 'Festival']
    },
    yAxis: {
      title: {
        text: '%'
      }
      
    },
    series: [
      {
        type: 'pie',
        name: 'Percentage %',
        data: [
          {
            name: 'Sport',
            y: 30,
            color: '#7cb5ec'
          },
          {
            name: 'Concert',
            y: 20,
            color: '#90312A'
          },
          {
            name: 'Wedding',
            y: 10,
            color: '#90ed7d'
          },
          {
            name: 'Festival',
            y: 40,
            color: '#f7a35c'
          }
          
        ]
        
      }
      
    ],
    credits: {
      enabled: false
    }
  });
}
