import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
//declare var google:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
  constructor(private _auth:AuthService, private router:Router){}
  // ngOnInit(): void {
  //   google.account.id.initialize({
  //     client_id:'',
  //     callback:(resp:any)=>{

  //     }
  //   })

  // }
  token:any;
login() {
  this._auth.login(this.author)
  .subscribe(
    res=>{
      this.token=res;
      localStorage.setItem('token',this.token.myToken)
      this.router.navigate(['/home'])
      

    },
    err=>{
      console.log(err);
    }
  )

}

  author={
    email:'',
    password:''
  }

}
