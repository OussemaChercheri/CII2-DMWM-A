import { Component, OnInit } from '@angular/core';
import { CrudComponent } from '../crud/crud.component';
import { Events } from '../Models/Events';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {

  nbEvent: any;

  constructor(private _alltheevents: CrudComponent) { }

  ngOnInit(): void {
    const allEvents = this._alltheevents.getallEvents();
    this.nbEvent = allEvents;
    console.log(this.nbEvent);
  }

}