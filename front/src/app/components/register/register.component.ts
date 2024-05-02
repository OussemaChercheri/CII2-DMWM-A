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
    let formData = new FormData();
    formData.append('username', this.author.username);
    formData.append('email', this.author.email);
    formData.append('password', this.author.password);
    console.log(formData);
    this._auth.register(formData)
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
