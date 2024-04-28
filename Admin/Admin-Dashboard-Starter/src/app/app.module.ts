import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ImgPipe } from './pipes/img.pipe';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
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
    AboutusComponent,
    ImgPipe,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
