import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventsComponent } from './components/events/events.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MytunisiaComponent } from './components/mytunisia/mytunisia.component';
import { OurteamComponent } from './components/ourteam/ourteam.component';
import { TouristComponent } from './components/tourist/tourist.component';
import { GalleriaModule } from 'primeng/galleria';
import { AddPostComponent } from './components/add-post/add-post.component';
import { NavbarAllpagesComponent } from './components/navbar-allpages/navbar-allpages.component';
import { CrudsertorsComponent } from './components/crudsertors/crudsertors.component';
import { AllservicesComponent } from './components/allservices/allservices.component';
import { CrudComponent } from './components/crud/crud.component';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllComponent } from './components/all/all.component';







@NgModule({
  declarations:[
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    EventsComponent,
    EvaluationComponent,
    NavbarComponent,
    MytunisiaComponent,
    OurteamComponent,
    TouristComponent,
    AddPostComponent,
    NavbarAllpagesComponent,
    CrudsertorsComponent,
    AllservicesComponent,
    CrudComponent,
    AllEventsComponent,
    AllComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    GalleriaModule,
    BrowserAnimationsModule

],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
