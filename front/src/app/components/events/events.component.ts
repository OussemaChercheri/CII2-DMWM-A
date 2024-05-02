import { Component } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent  {
  ngOnInit(){
    AOS.init();
  }

}
