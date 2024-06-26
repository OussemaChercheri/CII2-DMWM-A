import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  private url = 'http://localhost:3001/api/auth/';
  register(author:any){
    return this.http.post(this.url+'signup',author);

  }
  login(author:any){
    return this.http.post(this.url+'signin',author);

  }
  seDeconnecter() {
    localStorage.removeItem('access_token');
  }
  estConnecte() {
    let token = localStorage.getItem('access_token');
    if (token) return true;
    return false;
  }
}
