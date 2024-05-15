import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TouristicServicesService } from '../services/touristicservices.service';

@Component({
  selector: 'app-touristicservices',
  templateUrl: './touristicservices.component.html',
  styleUrls: ['./touristicservices.component.scss']
})
export class TouristicservicesComponent implements OnInit {

  id: any;
  services: any[] = [];
  constructor(private http: HttpClient, private _serv: TouristicServicesService, private act: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
    this.loadServices();
  }

  loadServices() {
    this._serv.getTouristicServices().subscribe(data => {
      this.services = data.filter(service => service.isApproved);
      
    })
  }

}
