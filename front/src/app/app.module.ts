import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
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
import { MatDialogModule } from '@angular/material/dialog';


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
    AddPostComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    GalleriaModule,
    MatDialogModule

  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
