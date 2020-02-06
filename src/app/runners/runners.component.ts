import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-runners',
  templateUrl: './runners.component.html',
  styleUrls: ['./runners.component.css']
})
export class RunnersComponent implements OnInit {

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
  }

}
