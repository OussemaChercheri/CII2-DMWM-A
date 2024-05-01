import { Component, OnInit } from '@angular/core';
import { EnventserviceService } from '../services/enventservice.service';
import { Injectable } from '@angular/core';
import {FormGroup,FormBuilder,Validators, FormControl} from '@angular/forms';
import { Events } from '../../models/Events';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
@Injectable()

export class CrudComponent implements OnInit{  
  showadd!:boolean;
  showupdate!:boolean;
  event:Events=new Events;
  formValue!:FormGroup;
  allEvents:any;

  constructor(private _ev:EnventserviceService , private formBuilder:FormBuilder ){
    this.formValue = new FormGroup({
      id: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      categorie: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      dateregistredeb: new FormControl('', Validators.required),
      dateregistrefin: new FormControl('', Validators.required),
      nbrtickets: new FormControl('', Validators.required),
      image: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.getdata();
  }

  addServicetori(){
    let fd= new FormData();
    fd.append('title',this.formValue.value.title);
    fd.append('description',this.formValue.value.description);
    fd.append('date',this.formValue.value.date);
    fd.append('time',this.formValue.value.time);
    fd.append('location',this.formValue.value.location);
    fd.append('categorie',this.formValue.value.categorie);
    fd.append('price',this.formValue.value.price);
    fd.append('dateregistredeb',this.formValue.value.dateregistredeb);
    fd.append('dateregistrefin',this.formValue.value.dateregistrefin);
    fd.append('nbrtickets',this.formValue.value.nbrtickets);
    fd.append('image',this.formValue.value.image);
    this._ev.createToristiqueSer(fd)
      .subscribe(
        res => {
          this.formValue.reset();
          this.getdata();
        },
        err => {
          console.log(err);
        }
      );
  }
  
  add() {
    this.showadd = true;
    this.showupdate = false;
    this.showadd = false;
    this.showupdate = true;
    this.formValue.controls['id'].setValue("");
    this.formValue.controls['title'].setValue("");
    this.formValue.controls['description'].setValue("");
    this.formValue.controls['date'].setValue("");
    this.formValue.controls['time'].setValue("");
    this.formValue.controls['location'].setValue("");
    this.formValue.controls['categorie'].setValue("");
    this.formValue.controls['price'].setValue("");
    this.formValue.controls['dateregistredeb'].setValue("");
    this.formValue.controls['dateregistrefin'].setValue("");
    this.formValue.controls['nbrtickets'].setValue("");
    this.formValue.controls['image'].setValue("");
  }

  getdata(){
    this._ev.getToristiqueServ().subscribe(
      (res) => {
        this.allEvents = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getallEvents(): number {
    return this._ev.getToristiqueServ.length;
  }

  deleteser(data: any) {
    this._ev.deleteEvent(data._id).subscribe(res => {
      this.getdata();
    });
  }


  edit(data: any) {
    this.showadd = false;
    this.showupdate = true;
    this.event = data;
    const idevent=data._id;
    this.formValue.controls['id'].setValue(data._id);
    this.formValue.controls['title'].setValue(data.title);
    this.formValue.controls['description'].setValue(data.description);
    this.formValue.controls['date'].setValue(data.date);
    this.formValue.controls['time'].setValue(data.time);
    this.formValue.controls['location'].setValue(data.location);
    this.formValue.controls['categorie'].setValue(data.categorie);
    this.formValue.controls['price'].setValue(data.price);
    this.formValue.controls['dateregistredeb'].setValue(data.dateregistredeb);
    this.formValue.controls['dateregistrefin'].setValue(data.dateregistrefin);
    this.formValue.controls['nbrtickets'].setValue(data.nbrtickets);
    this.formValue.controls['image'].setValue(data.image);
  }

update() {
  const eventId = this.formValue.value.id; // Extract event ID from form value
  const eventDataToUpdate = { ...this.formValue.value }; // Create a copy of the form value

  // Remove _id property from the copy of form value
  delete eventDataToUpdate.id;
  console.log(this.formValue.value);
  
  this._ev.updateEvent(eventDataToUpdate,eventId)
    .subscribe(
      () => {
        console.log("Event updated successfully");
        this.getdata(); // Refresh data after update
      },
      (err) => {
        console.error("Error updating event:", err);
      }
    );
    
}
}

