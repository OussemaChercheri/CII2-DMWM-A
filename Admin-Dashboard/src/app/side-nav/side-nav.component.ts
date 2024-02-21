import { Component } from '@angular/core';
import {
  faBox,
  faChartBar,
  faChartSimple,
  faContactBook,
  faDashboard,
  faDna,
  faHand,
  faLocation,
  faMoneyBill,
  faPuzzlePiece,
  faShop,
  faUser
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;
  faUser = faUser;
  faPuzzlePiece = faPuzzlePiece;
  faChartSimple =  faChartSimple;
  faDna = faDna;

}
