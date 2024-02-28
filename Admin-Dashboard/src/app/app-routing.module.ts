import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
const routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '', redirectTo: '/main', pathMatch: 'full' }
];
}