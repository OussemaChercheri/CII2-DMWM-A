import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TouristicServicesService } from '../services/touristicservices.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  id: any;
  services: any[] = [];
  constructor(private http: HttpClient, private _serv: TouristicServicesService, private act: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
    this.loadServices();
  }

  loadServices() {
    this._serv.getTouristicServices().subscribe(data => {
      this.services = data.filter(service => !service.isApproved); // Filter services where isApproved is false
    });
  }

  approve(serviceId: string) {
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
}
