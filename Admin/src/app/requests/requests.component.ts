import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../services/events.service';
import { TouristicServicesService } from '../services/touristicservices.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {


  id: any;
  services: any[] = [];
  events: any[] = [];
  constructor(private http: HttpClient, private _serv: TouristicServicesService, private _ev: EventsService, private act: ActivatedRoute) { }

  ngOnInit(): void {
<<<<<<< HEAD:Admin/src/app/requests/requests.component.ts
    this.http.get<any[]>('http://localhost:3000/api/services').subscribe(data => {
      this.services = data;
    
=======
>>>>>>> 8abc042b25d79bc46e35cbcefe1833c1611a4e83:Admin/Admin-Dashboard-Starter/src/app/requests/requests.component.ts
    this.id = this.act.snapshot.paramMap.get('id');
    this.loadServices();
    this.loadEvent();
  }

  loadServices() {
    this._serv.getTouristicServices().subscribe(data => {
      this.services = data.filter(service => !service.isApproved); // Filter services where isApproved is false
    });
<<<<<<< HEAD:Admin/src/app/requests/requests.component.ts
=======
  }

  approveService(serviceId: string) {
    this.http.post(`http://localhost:3001/api/services/${serviceId}/approve`, {}).subscribe(() => {
      this.loadServices(); // Reload services after approval
    });
  }

  deleteService(serviceId: string) {
    this._serv.deleteService(serviceId).subscribe(() => {
      // Remove the deleted service from the local services array
      this.services = this.services.filter(service => service._id !== serviceId);
    }, error => {
      console.error('Error deleting service:', error);
      // Handle error (e.g., display an error message)
    });
  }
  loadEvent() {
    this._ev.getEvents().subscribe(data => {
      this.events = data.filter(event => !event.isApproved);
    });
  }

  approveEvent(eventId: string) {
    this.http.post(`http://localhost:3001/api/events/${eventId}/approve`, {}).subscribe(() => {
      this.loadEvent(); // Reload events after approval
    }, error => {
      console.error('Error approving event:', error);
      // Handle error (e.g., display an error message)
    });
  }
  

  deleteEvent(eventId: string) {
    this._ev.deleteEvent(eventId).subscribe(() => {
      this.events = this.events.filter(event => event._id !== eventId);
    }, error => {
      console.error('Error deleting event:', error);
    })
  }
>>>>>>> 8abc042b25d79bc46e35cbcefe1833c1611a4e83:Admin/Admin-Dashboard-Starter/src/app/requests/requests.component.ts

}
}
