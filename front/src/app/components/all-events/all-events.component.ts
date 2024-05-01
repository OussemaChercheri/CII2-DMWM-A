import { Component, OnInit } from '@angular/core';
import { EnventserviceService } from '../services/enventservice.service';
import { Events } from '../../models/Events';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrl: './all-events.component.css'
})
export class AllEventsComponent implements OnInit{
  ngOnInit(): void {
    this.getdata();
  }

  allEvents:Events[] | any;
  constructor(private _ev:EnventserviceService){} 

  getdata(){
    this._ev.getToristiqueServ().subscribe(
      (res) => {
        this.allEvents = res;
      },
      (err) => {
        console.log(err);
      }
    );
  } 
}

