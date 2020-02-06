import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

export interface Runner {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class RunnerService {

  private runnersCollection: AngularFirestoreCollection<Runner>;
  runners: Observable<Runner[]>;

  constructor(public afs: AngularFirestore) {}

  getRunners() {
    this.runnersCollection = this.afs.collection<Runner>('moonlight/2020/runners');
    return this.runners = this.runnersCollection.valueChanges();
  }


}
