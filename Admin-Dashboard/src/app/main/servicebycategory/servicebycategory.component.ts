import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-servicebycategory',
  templateUrl: './servicebycategory.component.html',
  styleUrls: ['./servicebycategory.component.scss']
})
export class ServicebycategoryComponent {
  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Service by Category'
    },
    xAxis: {
      categories: ['Hotel', 'Coffee', 'Restaurant', 'Bar']
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
            name: 'Hotel',
            y: 10,
            color: '#7cb5ec'
          },
          {
            name: 'Coffee',
            y: 70,
            color: '#D3EA27'
          },
          {
            name: 'Restaurant',
            y: 15,
            color: '#90ed7d'
          },
          {
            name: 'Bar',
            y: 5,
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
