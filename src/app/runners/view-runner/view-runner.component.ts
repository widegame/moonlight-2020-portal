import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Runner, RunnerService} from '../../services/runner.service';

@Component({
  selector: 'app-view-runner',
  templateUrl: './view-runner.component.html',
  styleUrls: ['./view-runner.component.css']
})
export class ViewRunnerComponent implements OnDestroy {

  currentID: string;

  runner: Runner;

  runnerSub;

  constructor(private route: ActivatedRoute, public runnerService: RunnerService) {
    this.currentID = this.route.snapshot.params.userID; // Set ID from URL
    this.runnerSub = this.runnerService.getRunner(this.currentID).subscribe(runner => {
      this.runner = runner; // Set global runner variable to subscription data
      console.log('New data from subscription');
    });
  }

  ngOnDestroy(): void {
    this.runnerSub.unsubscribe();
  }

  addMember() {
    this.runnerService.addTeamMember(this.currentID, {
      name: 'New Person',
      dob: '22/01/2000',
      contactNumber: '',
      leader: false,
      retired: false,
      memNo: ''
    });
  }

}
