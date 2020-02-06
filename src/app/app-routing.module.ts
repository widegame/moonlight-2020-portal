import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

import {DashboardComponent} from './dashboard/dashboard.component';
import {RunnersComponent} from './runners/runners.component';
import {SignInComponent} from './account/sign-in/sign-in.component';

const redirectUnauthorizedToLanding = redirectUnauthorizedTo(['/sign-in']);

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent, ...canActivate(redirectUnauthorizedToLanding) },
  { path: 'runners', component: RunnersComponent, ...canActivate(redirectUnauthorizedToLanding)},
  { path: 'sign-in', component: SignInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
