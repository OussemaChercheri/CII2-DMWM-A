import { Component , Input, OnInit } from '@angular/core';
// Initialization for ES Users
interface carouselimages{
     imagesrc: string;
     imagealt: string;
   }


@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrl: './caroussel.component.css'
})
export class CarousselComponent implements OnInit{
   @Input() image: carouselimages[]=[];
   seletedindex=0;
  
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }

}

