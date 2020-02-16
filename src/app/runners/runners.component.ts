import {Component, OnDestroy, OnInit} from '@angular/core';
import {Runner, RunnerWithId} from '../services/runner.service';
import {RunnerService} from '../services/runner.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-runners',
  templateUrl: './runners.component.html',
  styleUrls: ['./runners.component.css']
})

export class RunnersComponent implements OnDestroy {

  runnerSubscription: Subscription;

  runnerData: RunnerWithId[];
  runnerView: RunnerWithId[];
  runnerCount: any = '...';
  searchTerm = '';

  constructor(public runnerService: RunnerService) {

    this.runnerSubscription = this.runnerService.getRunners() // Subscribe to runners collection
      .subscribe(runners => {
        this.runnerData = runners as RunnerWithId[]; // Add to data array (for later searches)
        this.searchRunners();
        this.runnerCount = 0;
        for (const runner of this.runnerData) {
          this.runnerCount++; // Count number of runners
        }
      });
  }

  ngOnDestroy(): void {
    this.runnerSubscription.unsubscribe();
  }

  searchRunners() {
    this.runnerView = [];
    for (const runner of this.runnerData) {
      if (runner.name.toLowerCase().includes(this.searchTerm.toLowerCase())) {
        this.runnerView.push(runner);
      }
    }
  }


}
