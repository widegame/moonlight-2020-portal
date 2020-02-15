import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Runner, RunnerService} from '../../services/runner.service';

@Component({
  selector: 'app-view-runner',
  templateUrl: './view-runner.component.html',
  styleUrls: ['./view-runner.component.css']
})
export class ViewRunnerComponent {

  currentID: string;

  runner: Runner;

  constructor(private route: ActivatedRoute, public runnerService: RunnerService) {
    this.currentID = this.route.snapshot.params.userID; // Set ID from URL
    this.runnerService.getRunner(this.currentID).subscribe(runner => {
      this.runner = runner; // Set global runner variable to subscription data
    });
  }

}
