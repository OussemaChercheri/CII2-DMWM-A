import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../../models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {

  constructor(private http:HttpClient) { }

  getAllReservation(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`http://localhost:3000/api/reserv`);
  }

  createReservation(reservations:any): Observable<Reservation> {
    return this.http.post<Reservation>(`http://localhost:3000/api/reserv/`,reservations);
  }

  updateReservation(reservations:any,_id:any): Observable<Reservation> {
    console.log(_id);
    return this.http.patch<Reservation>(`http://localhost:3000/api/reserv/`+_id,reservations);
  }

  deleteReservation(_id:string): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/reserv/`+_id);
  }
}