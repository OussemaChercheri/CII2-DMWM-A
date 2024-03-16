import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestsComponent } from './requests/requests.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: HomeComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'requests', component: RequestsComponent},
  { path: 'statistics', component: StatisticsComponent},
  { path: 'evaluation', component: EvaluationComponent},
  { path: 'aboutus', component: AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
