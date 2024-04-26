import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse, HttpParams} from '@angular/common/http';
import { ServiceTor } from '../Models/Events';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnventserviceService {

  constructor(private http:HttpClient) { }

  getToristiqueServ(filter:any){

    return this.http.get<ServiceTor[]>(`http://localhost:3001/api/services`)

  }

  create(service:any): Observable<ServiceTor>  {
    return this.http.post<ServiceTor>(`http://localhost:3001/api/services`, service, {
      headers:{
        enctype: 'multipart/form-data'
      }
    })


  }
  updateEvent(service:any,_id:any ) :Observable<ServiceTor>{
  /*   console.log(_id); */
    return this.http.patch<ServiceTor>(`http://localhost:3001/api/services/` +_id,service)

  }
  deleteService(_id:any): Observable<any>{
    return this.http.delete<any>(`http://localhost:3001/api/services/`+_id)

  }
   /*  getImage(id: string){
    return this.http.get(`http://localhost:3001/api/services/getimage/` + id)
  }  */

}
