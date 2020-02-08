import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {AngularFireAuth, } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email: string;
  password: string;
  errorMessage;
  loading = false;

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    this.loading = true;
    if (!this.email) {
      this.errorMessage = 'Please enter email address!';
      this.loading = false;
    } else if (!this.password) {
      this.errorMessage = 'Please enter password';
      this.loading = false;
    } else {
      console.log('Signing in...');
      this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).catch((error) => {
        console.log(error.code, error.message);
        this.errorMessage = error.message;
        this.loading = false;
      }).then(() => {
        this.router.navigate(['/']);
      });
    }
  }

}
