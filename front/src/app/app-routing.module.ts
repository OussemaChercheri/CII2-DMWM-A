import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { OurteamComponent } from './components/ourteam/ourteam.component';
import { CarouselComponent } from '@coreui/angular';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: '',redirectTo:'/home',pathMatch:'full'},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'home' , component:HomeComponent},
  {path:'ourteam' , component:OurteamComponent},
  {path:'Contact' , component:ContactComponent},
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
