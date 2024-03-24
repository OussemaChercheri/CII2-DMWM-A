import { Component, Input, OnInit } from '@angular/core';

interface carouselimages{
  imagesrc: string;
  imagealt: string;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit{
 @Input() image: carouselimages[]=[];
 seletedindex=0;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
