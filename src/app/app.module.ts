import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
import {AngularFireAuthGuardModule} from '@angular/fire/auth-guard';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './layouts/header/header.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RunnersComponent} from './runners/runners.component';
import {SignInComponent} from './account/sign-in/sign-in.component';
import {CatchersComponent} from './catchers/catchers.component';
import {AddRunnerComponent} from './runners/add-runner/add-runner.component';
import {ViewRunnerComponent} from './runners/view-runner/view-runner.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
// import { BoundariesComponent } from './settings/boundaries/boundaries.component';
// import { SettingsComponent } from './settings/settings.component';
// import { SettingsHeaderComponent } from './settings/settings-header/settings-header.component';

import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    RunnersComponent,
    SignInComponent,
    CatchersComponent,
    AddRunnerComponent,
    ViewRunnerComponent,
    NotFoundComponent,
    // BoundariesComponent,
    // SettingsComponent,
    // SettingsHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireAuthGuardModule,
    FormsModule,
  ],
  providers: [
    AngularFireAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
