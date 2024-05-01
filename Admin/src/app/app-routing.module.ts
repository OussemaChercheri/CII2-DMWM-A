import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD:Admin/Admin-Dashboard-Starter/src/app/app-routing.module.ts
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './auth/login/login.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
=======

// import { AboutusComponent } from './aboutus/aboutus.component';
// import { EvaluationComponent } from './evaluation/evaluation.component';

>>>>>>> 4a47fdc78b67694dbbdbe8c5e8befb5770c127e2:Admin/src/app/app-routing.module.ts
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestsComponent } from './requests/requests.component';
import { StatisticsComponent } from './statistics/statistics.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},

  { path: 'dashboard', component: HomeComponent},
  { path: 'login', component:LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'requests', component: RequestsComponent},
  { path: 'statistics', component: StatisticsComponent},
<<<<<<< HEAD:Admin/Admin-Dashboard-Starter/src/app/app-routing.module.ts
  { path: 'evaluation', component: EvaluationComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: '**', component: PageNotFoundComponent }
=======
  // { path: 'evaluation', component: EvaluationComponent},
  // { path: 'aboutus', component: AboutusComponent}
>>>>>>> 4a47fdc78b67694dbbdbe8c5e8befb5770c127e2:Admin/src/app/app-routing.module.ts
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
