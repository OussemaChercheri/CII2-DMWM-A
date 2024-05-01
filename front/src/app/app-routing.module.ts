import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { OurteamComponent } from './components/ourteam/ourteam.component';
import { ContactComponent } from './components/contact/contact.component';
import { AffichageComponent } from './components/affichage/affichage.component';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { CrudComponent } from './components/crud/crud.component';

const routes: Routes = [
  {path: '',redirectTo:'/home',pathMatch:'full'},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'home' , component:HomeComponent},
  {path:'ourteam' , component:OurteamComponent},
  {path:'Contact' , component:ContactComponent},
  {path:'ownerEvents',component:AffichageComponent},
  {path:'crud',component:CrudComponent},
  {path:'ev',component:AllEventsComponent},
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
