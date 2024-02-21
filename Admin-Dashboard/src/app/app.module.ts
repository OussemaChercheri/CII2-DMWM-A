import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EventbycategoryComponent } from './main/eventbycategory/eventbycategory.component';
import { EventsbymounthComponent } from './main/eventsbymounth/eventsbymounth.component';
import { MainComponent } from './main/main.component';
import { ServicebycategoryComponent } from './main/servicebycategory/servicebycategory.component';
import { ServicebymounthComponent } from './main/servicebymounth/servicebymounth.component';
import { ProfileComponent } from './profile/profile.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    TopWidgetsComponent,
    EventsbymounthComponent,
    ServicebymounthComponent,
    ServicebycategoryComponent,
    EventbycategoryComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
