import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  author={
    username:'',
    email:'',
    password:''
  }
  constructor(private _auth:AuthService , private router:Router){}

  ngOnInit(): void {

  }

  register() {
    this._auth.register(this.author)
    .subscribe({
      next: res => {
        this.router.navigate(['/login']);
      },
      error: error => {
        console.error('Registration failed:', error);
        // Handle the error, if needed
      }
    });

  }


}
