import { Component } from '@angular/core';
// Initialization for ES Users
import {
  Carousel,
  initTWE,
} from "tw-elements";

initTWE({ Carousel });

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrl: './caroussel.component.css'
})
export class CarousselComponent {

}
