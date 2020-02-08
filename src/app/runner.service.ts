import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { environment } from '../environments/environment';

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
    console.log(environment.globals.game + '/' + environment.globals.year + '/runners')
    this.runnersCollection = this.afs.collection<Runner>(environment.globals.game + '/' + environment.globals.year + '/runners');
    return this.runners = this.runnersCollection.valueChanges();
  }

}
