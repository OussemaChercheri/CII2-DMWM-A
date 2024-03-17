import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  author={
    name:'',
    email:'',
    password:''
  }
  constructor(private _auth:AuthService , private router:Router){}

  ngOnInit(): void {
   
    
  }

  register() {
    let formData = new FormData();
    formData.append('name', this.author.name);
    formData.append('email', this.author.email);
    formData.append('password', this.author.password);
    
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
