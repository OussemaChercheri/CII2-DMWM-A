import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    // If you need to initialize anything on component initialization, place it here.
  }

  token: any;

  login() {
    this._auth.login(this.author)
      .subscribe(
        (res: any) => {
          this.token = res;
          localStorage.setItem('access_token', this.token.myToken);
          this.router.navigate(['/home']);
        },
        err => {
          console.log(err);
          // Handle error here, such as displaying an error message to the user.
        }
      );
  }

  author = {
    email: '',
    password: ''
  };
}
