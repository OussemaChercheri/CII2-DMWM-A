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
    this.http.get<any[]>('http://localhost:3001/api/services').subscribe(data => {
      this.services = data;
    
    this.id = this.act.snapshot.paramMap.get('id');
    this._serv.getImageById(this.id)
      .subscribe(
        res => {
          this.services = res;
          console.log(this.services);
        }
      )

    });
    
  }

}
