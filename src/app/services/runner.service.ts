import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

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

export interface RunnerWithId extends Runner {
  id: string;
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
  runners: Observable<RunnerWithId[]>;

  private runnerDoc: AngularFirestoreDocument<Runner>;
  runner: Observable<Runner>;

  constructor(public afs: AngularFirestore) {
  }

  getRunners() {
    this.runnersCollection = this.afs.collection<Runner>(environment.globals.game + '/' + environment.globals.year + '/runners');
    return this.runners = this.runnersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Runner;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
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
