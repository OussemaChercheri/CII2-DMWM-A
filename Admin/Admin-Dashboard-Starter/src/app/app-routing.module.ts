import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './auth/login/login.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestsComponent } from './requests/requests.component';
import { TouristicservicesComponent } from './touristicservices/touristicservices.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: HomeComponent},
  { path: 'login', component:LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'requests', component: RequestsComponent},
  { path: 'evaluation', component: EvaluationComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'events', component: EventsComponent},
  { path: 'touristicservices', component: TouristicservicesComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
