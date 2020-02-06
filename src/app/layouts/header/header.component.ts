import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {AngularFireAuth, } from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/sign-in']);
    }).catch((error) => {
        alert(error.message);
    });
  }

}
