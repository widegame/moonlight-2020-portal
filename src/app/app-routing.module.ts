import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RunnersComponent} from './runners/runners.component';
import {SignInComponent} from './account/sign-in/sign-in.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent },
  { path: 'runners', component: RunnersComponent },
  { path: 'sign-in', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
