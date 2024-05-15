import { Component } from '@angular/core';
import { EnventserviceService } from '../services/enventservice.service';
import { ServiceTor } from '../../models/Servicetor';

@Component({
  selector: 'app-allservices',
  templateUrl: './allservices.component.html',
  styleUrl: './allservices.component.css'
})
export class AllservicesComponent {
  ch:any;
  allservice:ServiceTor[] | any;
  allservice2:ServiceTor[] |any;

  ngOnInit(): void {
    this.allservice=this.allservice2;
    this.getdata();


  }

  constructor(private _ev:EnventserviceService){}

  getdata(){
    this._ev.getToristiqueServ().subscribe(
      (res) => {
        this.allservice = res;
      },
      (err) => {
        console.log(err);
      }
    );
    this.allservice2=this.allservice;
  }

}
