import { Component } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-mytunisia',
  templateUrl: './mytunisia.component.html',
  styleUrl: './mytunisia.component.css'
})
export class MytunisiaComponent {
  ngOnInit(){
    AOS.init();
  }

}
