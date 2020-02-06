import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Runner } from '../runner.service';
import { RunnerService } from '../runner.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-runners',
  templateUrl: './runners.component.html',
  styleUrls: ['./runners.component.css']
})

export class RunnersComponent {

  // runners: Observable<Runner[]>;

  runnerData: Runner[];

  view = [];

  constructor(public runnerService: RunnerService, route: ActivatedRoute) {
    // this.runners = runnerService.getRunners(); // Sets the observable declared as runners

    route.params.subscribe(val => {
      this.runnerService.getRunners()
        .subscribe(nodes => {
          this.runnerData = nodes as Runner[];
          console.log(this.runnerData);
        });
    });
  }

  addRunner() {
    for (const runner of this.runnerData) {
     console.log(runner.name);
     this.view.push(runner.name);
    }
  }


}
