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

export class RunnersComponent implements OnInit {

  runnerData: Runner[];
  runnerCount = 0;

  constructor(public runnerService: RunnerService) {

    this.runnerService.getRunners() // Subscribe to runners collection
      .subscribe(runners => {
        this.runnerData = runners as Runner[]; // Add to displayed array
        this.runnerCount = 0;
        for (const runner of this.runnerData) {
          this.runnerCount++; // Count number of runners
        }
      });
  }

  ngOnInit(): void {
  }


}
