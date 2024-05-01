import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild ('adminForm', { static: false}) adminForm!: ElementRef;

  name: string = "Admin";
  email: string = "admin@email.com";
  phone: string = "+15525254";
  photo: string = "assets/avatar.jpg";

  photoPreview: string | ArrayBuffer | null = null;

  onPhotoChange(event: any){
    const file = event.target.files?.[0];
    if (file){
      this.handleFile(file);
    }
  }
  handleFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.photo = e.target?.result as string;
    }
    reader.readAsDataURL(file);
  }
  onSubmit() {
    console.log('Form submitted!', this.adminForm);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
