import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Events } from '../../models/Events';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnventserviceService1 {

  constructor(private http:HttpClient) { }

  getToristiqueServ(): Observable<Events[]> {
    return this.http.get<Events[]>(`http://localhost:3001/api/events`);
  }

  createToristiqueSer(events:any): Observable<Events> {
    return this.http.post<Events>(`http://localhost:3001/api/events/`,events);
  }

  updateEvent(events:any,_id:any): Observable<Events> {
    return this.http.patch<Events>(`http://localhost:3001/api/events/`+_id,events);
  }

  deleteEvent(_id:string): Observable<any> {
    return this.http.delete(`http://localhost:3001/api/events/`+_id);
  }
  searchsearchEventWithTitle(title:any): Observable<Events> {
    return this.http.get<Events>(`http://localhost:3001/api/events/search/` + title);
  }
}
