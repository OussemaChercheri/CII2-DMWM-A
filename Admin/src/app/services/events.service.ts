import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private apiUrl = 'http://localhost:3001/api/events'
  constructor(private http: HttpClient) { }

  getEvents(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl)
    .pipe(
      catchError(this.handleError)
    )
  };
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
  deleteEvent(id: string): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
  }
}
