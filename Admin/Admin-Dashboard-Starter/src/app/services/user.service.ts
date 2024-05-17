import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3001/api/users';
  constructor(private http: HttpClient) {
  }
  getUser(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any){
    console.error('An error occured:', error);
    return throwError(error);
  }
  deleteUser(id: string): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
