import { Component, OnInit } from '@angular/core';
import { Runner, RunnerService } from '../runner.service';
import { Catcher, CatcherService } from '../catcher.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  runnerCount: any = '-';
  catcherCount: any = '-';

  constructor(public runnerService: RunnerService, public catcherService: CatcherService) {
    // Get Runner count
    this.runnerService.getRunners()
      .subscribe(runners => {
        const runnerData = runners as Runner[];
        this.runnerCount = 0;
        for (const runner of runnerData) {
          this.runnerCount++;
        }
      });

    // Get Catcher count
    this.catcherService.getCatchers()
      .subscribe(catchers => {
        const catcherData = catchers as Catcher[];
        this.catcherCount = 0;
        for (const catcher of catcherData) {
          this.catcherCount++;
        }
      });
  }

  ngOnInit() {
  }

}
