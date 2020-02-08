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
  runnerView: Runner[];
  runnerCount: any = '...';
  searchTerm: string;

  constructor(public runnerService: RunnerService) {

    this.runnerService.getRunners() // Subscribe to runners collection
      .subscribe(runners => {
        this.runnerView = runners as Runner[]; // Add to view array
        this.runnerData = runners as Runner[]; // Add to data array (for later searches)
        this.runnerCount = 0;
        for (const runner of this.runnerData) {
          this.runnerCount++; // Count number of runners
        }
      });
  }

  ngOnInit(): void {
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
