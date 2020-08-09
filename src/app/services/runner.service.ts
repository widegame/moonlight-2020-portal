import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import * as firebase from 'firebase';

export interface Runner {
  name: string;
  category: string;
  group: string;
  members: Array<Member>;
  penalties: Array<Penalty>;
  contactName: string;
  contactEmail: string;
  contactMobile: string;
  contactNumber: string;
  contactAddress: string;
  noMembers: number;
  noActiveMembers: number;
  status: string;
  reason: string;
  registered: boolean;
  checkedIn: boolean;
  checkInTime: Date;
  firstCatchTime: Date;
  livesLost: number;
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
  retired: boolean;
}

export interface Penalty {
  type: string;
  lives: number;
  description: number;
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
        console.log('Getting data...');
        const data = a.payload.doc.data() as Runner;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  getRunner(id: string) {
    this.runnerDoc = this.afs.doc<Runner>(environment.globals.game + '/' + environment.globals.year + '/runners/' + id);
    console.log('Getting data...');
    return this.runner = this.runnerDoc.valueChanges();
  }

  addRunner(id: string, data: Runner) {
    this.runnerDoc = this.afs.doc<Runner>(environment.globals.game + '/' + environment.globals.year + '/runners/' + id);
    this.runnerDoc.set(data).catch(error => {
      alert(error);
    });
  }

  addTeamMember(teamID: string, memberData: Member) {
    console.log('Adding Member');
    this.afs.doc(environment.globals.game + '/' + environment.globals.year + '/runners/' + teamID).update({
      members: firebase.firestore.FieldValue.arrayUnion(memberData),
      noMembers: firebase.firestore.FieldValue.increment(1),
      noActiveMembers: firebase.firestore.FieldValue.increment(1),
    }).catch(error => {
      alert(error);
    });
  }

  updateRunner(teamID: string, runnerData: Runner) {
    this.afs.doc(environment.globals.game + '/' + environment.globals.year + '/runners/' + teamID)
      .update(runnerData).then(() => { console.log('Runner Updated'); })
      .catch(error => {
      alert(error);
    });
  }

}
