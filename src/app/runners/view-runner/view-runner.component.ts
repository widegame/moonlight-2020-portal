import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-runner',
  templateUrl: './view-runner.component.html',
  styleUrls: ['./view-runner.component.css']
})
export class ViewRunnerComponent implements OnInit {

  currentID: string;

  constructor(private route: ActivatedRoute) {
    if (this.route.snapshot.params.userID !== 'undefined') {
      this.currentID = this.route.snapshot.params.userID;
    } else {
      this.currentID = '';
    }
  }

  ngOnInit() {
  }

}
