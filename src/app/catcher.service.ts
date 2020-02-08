import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

export interface Catcher {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CatcherService {

  private catchersCollection: AngularFirestoreCollection<Catcher>;
  catchers: Observable<Catcher[]>;

  constructor(public afs: AngularFirestore) { }

  getCatchers() {
    this.catchersCollection = this.afs.collection<Catcher>('moonlight/2020/catchers');
    return this.catchers = this.catchersCollection.valueChanges();
  }
}
