import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  loggedUserData:any
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  };
  constructor(public auth: AuthService) {}


  
}
