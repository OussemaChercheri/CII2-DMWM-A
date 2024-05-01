import { Component, OnInit } from '@angular/core';
import { CrudComponent } from '../crud/crud.component';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {

nbEvent: number=0;

    constructor(private _alltheevents: CrudComponent) { }

  ngOnInit(): void {
    /* const allEvents = this._alltheevents.getallEvents();
    this.nbEvent =Object.keys(allEvents).length;
    console.log(this.nbEvent); */
  }

}