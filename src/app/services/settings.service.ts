import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

export interface Counts {
  runnerID: string;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private countsDoc: AngularFirestoreDocument<Counts>;
  counts: Observable<Counts>;

  constructor(public afs: AngularFirestore) {
  }

  getCounts() {
    this.countsDoc = this.afs.doc<Counts>(environment.globals.game + '/' + environment.globals.year + '/settings/counts');
    return this.counts = this.countsDoc.valueChanges();
  }

  updateCounts(data) {
    this.countsDoc = this.afs.doc<Counts>(environment.globals.game + '/' + environment.globals.year + '/settings/counts');
    this.countsDoc.update(data);
  }
}
