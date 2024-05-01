import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD:Admin/src/app/app-routing.module.ts

// import { AboutusComponent } from './aboutus/aboutus.component';
// import { EvaluationComponent } from './evaluation/evaluation.component';

=======
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './auth/login/login.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { EventsComponent } from './events/events.component';
>>>>>>> 8abc042b25d79bc46e35cbcefe1833c1611a4e83:Admin/Admin-Dashboard-Starter/src/app/app-routing.module.ts
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestsComponent } from './requests/requests.component';
import { TouristicservicesComponent } from './touristicservices/touristicservices.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},

  { path: 'dashboard', component: HomeComponent},
  { path: 'login', component:LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'requests', component: RequestsComponent},
<<<<<<< HEAD:Admin/src/app/app-routing.module.ts
  { path: 'statistics', component: StatisticsComponent},
  // { path: 'evaluation', component: EvaluationComponent},
  // { path: 'aboutus', component: AboutusComponent}
=======
  { path: 'evaluation', component: EvaluationComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'events', component: EventsComponent},
  { path: 'touristicservices', component: TouristicservicesComponent},
  { path: '**', component: PageNotFoundComponent }
>>>>>>> 8abc042b25d79bc46e35cbcefe1833c1611a4e83:Admin/Admin-Dashboard-Starter/src/app/app-routing.module.ts
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
