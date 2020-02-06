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

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    console.log('Signing in...');
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).catch((error) => {
      // Handle Errors here.
      console.log(error.code, error.message);
      // ...
    }).then(() => {
      console.log('Signed in as ' + this.email);
      this.router.navigate(['/']);
    });
  }

}
