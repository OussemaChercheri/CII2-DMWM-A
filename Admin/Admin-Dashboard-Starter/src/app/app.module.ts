import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD

=======
import { HeaderComponent } from './layout/header/header.component';
>>>>>>> origin/doni
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestsComponent } from './requests/requests.component';
import { TopWidgetsComponent } from './home/top-widgets/top-widgets.component';
import { EventbycategoryComponent } from './home/eventbycategory/eventbycategory.component';
import { ServicebycategoryComponent } from './home/servicebycategory/servicebycategory.component';
import { ServicebymounthComponent } from './home/serviceEventsbymounth/servicebymounth.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TouristicservicesComponent } from './statistics/touristicservices/touristicservices.component';
import { EventsComponent } from './statistics/events/events.component';
<<<<<<< HEAD

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ImgPipe } from './pipes/img.pipe';
=======
// Optional - for accessibility features
import { FormsModule } from '@angular/forms';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { AboutusComponent } from './aboutus/aboutus.component';
>>>>>>> origin/doni


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
=======
    HeaderComponent,
>>>>>>> origin/doni
    SideNavComponent,
    HomeComponent,
    ProfileComponent,
    RequestsComponent,
    TopWidgetsComponent,
    EventbycategoryComponent,
    ServicebycategoryComponent,
    ServicebymounthComponent,
    StatisticsComponent,
    TouristicservicesComponent,
    EventsComponent,
    EvaluationComponent,
<<<<<<< HEAD
    AboutusComponent,
    ImgPipe
=======
    AboutusComponent
>>>>>>> origin/doni
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
    HttpClientModule
=======
    FormsModule
>>>>>>> origin/doni
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
