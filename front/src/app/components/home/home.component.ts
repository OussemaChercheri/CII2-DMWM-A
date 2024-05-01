import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activeRoute.fragment.subscribe((section) => {
      this.JumpToSection(section);
        });
  }

  JumpToSection(section:any =""){
    document.getElementById(section)!.scrollIntoView({behavior: 'smooth'});
}
  isSignInPopupVisible: boolean = false;
  showSignInPopup() {
    this.isSignInPopupVisible = true;
  }

}
