import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule} from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { DirectiveDirective } from './directive.directive';
import { FooterComponent } from './footer/footer.component';
import { MytunisiaComponent } from './mytunisia/mytunisia.component';
import { TouristComponent } from './tourist/tourist.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    OurteamComponent,
    DirectiveDirective,
    FooterComponent,
    MytunisiaComponent,
    TouristComponent,
    EventsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }