import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';




@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrl: './caroussel.component.css',
  

})
export class CarousselComponent {
  
  images: any[];
  responsiveOptions: any;

  constructor() {
    this.images = [
      { itemImageSrc: '../src/assets/images/car1.jpg' },
      { itemImageSrc: 'path/to/your/image2.jpg' },
      // Add more images as needed
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}

