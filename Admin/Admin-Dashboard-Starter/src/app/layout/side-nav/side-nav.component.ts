import { Component, OnInit } from '@angular/core';
import {
  faDashboard,
  faPuzzlePiece,
  faUser
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  faDashboard = faDashboard;
  faUser = faUser;
  faPuzzlePiece = faPuzzlePiece;
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  constructor() { }

  ngOnInit(): void {
  
    
  }

}