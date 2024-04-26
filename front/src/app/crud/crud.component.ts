import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators,ReactiveFormsModule,} from '@angular/forms';
import {EnventserviceService} from '../service/enventservice.service';
import {ServiceTor} from '../Models/Events';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit {

 showadd!:boolean;
 showupdate!:boolean;
 Service:ServiceTor=new ServiceTor;
 formValue!:FormGroup;
 allservice:any
 allcategory:any
 fileName='';
  pathimage: any
  pathdoc:any
  filtration:any ={}

  constructor(private _ev:EnventserviceService , private formBuilder:FormBuilder ){



  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
       id:['',Validators.required],
      name:['',Validators.required],
      description:['',Validators.required],
      price:['',Validators.required],
      Category:['',Validators.required],
      location:['',Validators.required],
      document:[''],
      contactInfo:['',Validators.required],
      image:['',Validators.required]
    })
    this.getdata();

  }
//pour recupere le path de l'image
   selecteImage(event:any){
    this.fileName = event.target.value
     this.formValue.get('image')?.setValue(event.target.files[0]) ;
   /*  this.formValue.patchValue({image: event.target.files[0]}); */
  }

//methode pour fair methode post

   addServicetori(){
    const fd = new FormData();
    fd.append('name' ,this.formValue.value.name)
    fd.append('description' ,this.formValue.value.description)
    fd.append('price' ,this.formValue.value.price)
    fd.append('category' ,this.formValue.value.Category)
    fd.append('location' ,this.formValue.value.location)
    fd.append('document' ,this.formValue.value.document)
    fd.append('contactInfo' ,this.formValue.value.contactInfo)
    fd.append('image', this.formValue.value.image)

     this._ev.create(fd) .subscribe
    ((res)=>{

      alert("added sucessfully")
      this.getdata()
      let ref=document.getElementById('cancel')
      ref?.click()
      this.formValue.reset()
    },
    (err)=>{
   alert("something went wrong");
   this.formValue.reset()
  }
  )}

//methode pour get tous les donner
getdata(){
  this._ev.getToristiqueServ(this.filtration)
  .subscribe(res=>{
    this.allservice=res;

  }
  )
 }
 //methode pour delete
 deleteser(id:any){
  if(confirm('Are you sure to delete ?'))
  this._ev.deleteService(id).subscribe(res=>{
  this.getdata()
  }
 )
 }

// remove les champs dans la finetre si on click sur add
  add(){
    this.showadd=true
    this.showupdate=false
    this.formValue.controls['name'].setValue("")
    this.formValue.controls['price'].setValue("")
    this.formValue.controls['description'].setValue("")
    this.formValue.controls['Category'].setValue("")
    this.formValue.controls['document'].setValue("")
    this.formValue.controls['location'].setValue("")
    this.formValue.controls['contactInfo'].setValue("")
    this.formValue.controls['image'].setValue("")
  }
// charger les champs avec les donner dans la finetre si on click sur update
  edit (data:any){
    this.showadd=false
    this.showupdate=true
    this.Service = data;
    console.log(data)
    const idservice=data._id;
    this.formValue.controls['id'].setValue(idservice)
    this.formValue.controls['name'].setValue(data.name)
    this.formValue.controls['price'].setValue(data.price)
    this.formValue.controls['description'].setValue(data.description)
    this.formValue.controls['Category'].setValue(data.category)
    this.formValue.controls['location'].setValue(data.location)
    this.formValue.controls['document'].setValue(data.document)
    this.formValue.controls['contactInfo'].setValue(data.contactInfo)
     this.formValue.controls['image'].patchValue(data.image)


  }

  //methode pour update
  update(){
    const serviceId = this.formValue.value.id;
    const serviceDataToUpdate = { ...this.formValue.value };
    delete serviceDataToUpdate.id;
    console.log(this.formValue.value);
    this._ev.updateEvent(serviceDataToUpdate,serviceId)
    .subscribe(res=>{

      alert("update is sucessfully ")
      this.getdata();
      let ref=document.getElementById('cancel')
      ref?.click();
      this.formValue.reset()


    },
    err=>{
      alert("something went wrong")
    }

    )
  }





}
