import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { AllComponent } from './components/all/all.component';
import { AllservicesComponent } from './components/allservices/allservices.component';
import { ContactComponent } from './components/contact/contact.component';
import { CrudComponent } from './components/crud/crud.component';
import { CrudsertorsComponent } from './components/crudsertors/crudsertors.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MytunisiaComponent } from './components/mytunisia/mytunisia.component';
import { OurteamComponent } from './components/ourteam/ourteam.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ourteam', component: OurteamComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'tunisia', component: MytunisiaComponent },
  {path:'crud',component:CrudComponent},
  {path:'ev',component:AllEventsComponent},
  {path:'crudsr',component:CrudsertorsComponent},
  {path:'sr',component:AllservicesComponent},
  {path:'all',component:AllComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
