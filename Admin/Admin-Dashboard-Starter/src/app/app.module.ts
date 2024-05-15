import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EventsComponent } from './events/events.component';
import { EventbycategoryComponent } from './home/eventbycategory/eventbycategory.component';
import { HomeComponent } from './home/home.component';
import { ServicebymounthComponent } from './home/serviceEventsbymounth/servicebymounth.component';
import { ServicebycategoryComponent } from './home/servicebycategory/servicebycategory.component';
import { TopWidgetsComponent } from './home/top-widgets/top-widgets.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestsComponent } from './requests/requests.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TouristicservicesComponent } from './touristicservices/touristicservices.component';


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
    EventsComponent,
    PageNotFoundComponent,
    TouristicservicesComponent
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
