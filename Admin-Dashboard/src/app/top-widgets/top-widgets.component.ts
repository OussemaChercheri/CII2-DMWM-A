import { Component } from '@angular/core';
import {
  faCalendar,
  faEye,
  faLocation,
  faMoneyBill,
  faUser,
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss']
})
export class TopWidgetsComponent {
  faLocation = faLocation;
  faMoneyBill = faMoneyBill;
  faCalendar = faCalendar;
  faUser = faUser;
  faEye = faEye;


}
