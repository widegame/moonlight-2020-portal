import { Component, OnInit } from '@angular/core';
import {Catcher, CatcherService} from '../catcher.service';

@Component({
  selector: 'app-catchers',
  templateUrl: './catchers.component.html',
  styleUrls: ['./catchers.component.css']
})
export class CatchersComponent implements OnInit {

  catcherCount = 0;
  catcherData: Catcher[];

  constructor(public catcherService: CatcherService) {
    this.catcherService.getCatchers() // Subscribe to runners collection
      .subscribe(catchers => {
        this.catcherData = catchers as Catcher[]; // Add to displayed array
        this.catcherCount = 0;
        for (const catcher of this.catcherData) {
          this.catcherCount++; // Count number of runners
        }
      });
  }

  ngOnInit() {
  }

}
