import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  users: any[] = [];

  constructor(private http: HttpClient, private _user: UserService) {}

  ngOnInit(): void {
      this.loadUser();
  }
  loadUser(){
    this._user.getUser().subscribe(data => {
      this.users = data;
    })
  }
  deleteUser(userId: string){
    this._user.deleteUser(userId).subscribe(() => {
      this.users = this.users.filter(user => user._id !== userId);
    }, error => {
      console.error('Error deleting user:', error);
    });
  }

}
