import { Component, OnInit } from '@angular/core';
import { EnventserviceService } from '../services/enventservice.service';
import { Events } from '../../models/Events';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrl: './all-events.component.css'
})
export class AllEventsComponent implements OnInit{

  ch:any;
  allEvents:Events[] | any;
  allEventsFiltre:Events[] |any;
  allEvents2:Events[] |any;


  ngOnInit(): void {
    this.allEvents=this.allEvents2;
    this.getdata();
    

  }

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
    this.allEvents2=this.allEvents;
  }

  getdataFiltre(ch:any){
    this._ev.searchsearchEventWithTitle(ch).subscribe(
      (res) => {
        this.allEvents= res;
      },
      (err) => {
        console.log(err);
      }
    );
  } 
  onSearch(searchTerm: string) {
    if (searchTerm.trim() !== '') {
      this.getdataFiltre(searchTerm);
      this.allEvents=this.allEventsFiltre;
    } else {
      this.getdata();
      this.allEvents=this.allEvents2;
    }
  }
}

