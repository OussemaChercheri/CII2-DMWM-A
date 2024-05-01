import { Component, OnInit } from '@angular/core';

import { bootstrapApplication } from '@angular/platform-browser';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-servicebycategory',
  templateUrl: './servicebycategory.component.html',
  styleUrls: ['./servicebycategory.component.scss']
})
export class ServicebycategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Highcharts.chart('service-container', {
      chart: {
        type: 'pie',

        height: 325,
        style: {
          marginBottom: '-100px'
        }
      },
      title: {
        text: 'Touristic Services by Category',
        style: {
          fontSize: '15px',
          marginBottom: '-10px',
          color: '#000000' 
          
        }

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
              y: 15,
              color: 'pink'
            },
            {
              name: 'Coffee',
              y: 50,
              color: 'lightblue'
            },
            {
              name: 'Restaurant',
              y: 30,
              color: '#80ffaa'
            },
            {
              name: 'Bar',
              y: 5,
              color: '#ffff66'
            }
          ]
        }
      ],
      credits: {
        enabled: false
      }
    });
  }
    
  }


