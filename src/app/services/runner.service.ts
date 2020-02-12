import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

export interface Runner {
  name: string;
  category: string;
  group: string;
  members: Array<Member>;
  contactName: string;
  contactEmail: string;
  contactMobile: string;
  contactNumber: string;
  contactAddress: string;

}

export interface Member {
  name: string;
  dob: string;
  leader: boolean;
  contactNumber: string;
  memNo: string;
}

@Injectable({
  providedIn: 'root'
})
export class RunnerService {

  private runnersCollection: AngularFirestoreCollection<Runner>;
  runners: Observable<Runner[]>;

  private runnerDoc: AngularFirestoreDocument<Runner>;
  runner: Observable<Runner>;

  constructor(public afs: AngularFirestore) {
  }

  getRunners() {
    this.runnersCollection = this.afs.collection<Runner>(environment.globals.game + '/' + environment.globals.year + '/runners');
    return this.runners = this.runnersCollection.valueChanges();
  }

  getRunner(id: string) {
    this.runnerDoc = this.afs.doc<Runner>(environment.globals.game + '/' + environment.globals.year + '/runners/' + id);
    return this.runner = this.runnerDoc.valueChanges();
  }

  addRunner(id: string, data: Runner) {
    this.runnerDoc = this.afs.doc<Runner>(environment.globals.game + '/' + environment.globals.year + '/runners/' + id);
    this.runnerDoc.set(data).catch(error => {
      alert(error);
    });
  }

}
