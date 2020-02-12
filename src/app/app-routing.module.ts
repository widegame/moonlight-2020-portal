import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {redirectUnauthorizedTo, AngularFireAuthGuard} from '@angular/fire/auth-guard';

import {DashboardComponent} from './dashboard/dashboard.component';
import {RunnersComponent} from './runners/runners.component';
import {SignInComponent} from './account/sign-in/sign-in.component';
import {CatchersComponent} from './catchers/catchers.component';
import {AddRunnerComponent} from './runners/add-runner/add-runner.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['sign-in']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'runners',
    component: RunnersComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'catchers',
    component: CatchersComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'runners/add',
    component: AddRunnerComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'sign-in', component: SignInComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
