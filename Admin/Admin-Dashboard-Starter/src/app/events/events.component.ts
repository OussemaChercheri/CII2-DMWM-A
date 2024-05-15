import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  id: any;
  events: any[] = [];

  constructor(private http: HttpClient, private _ev: EventsService, private act: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
    this.loadEvent();
  }
  loadEvent() {
    this._ev.getEvents().subscribe(data => {
      this.events = data.filter(event => event.isApproved);
    });
  }

}
