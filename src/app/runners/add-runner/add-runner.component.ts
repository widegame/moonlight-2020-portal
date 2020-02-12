import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../../services/settings.service';
import {RunnerService} from '../../services/runner.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-add-runner',
  templateUrl: './add-runner.component.html',
  styleUrls: ['./add-runner.component.css']
})
export class AddRunnerComponent implements OnInit {

  currentTab = 1;
  error = '';

  func;

  name: string;
  group: string;
  category: string;
  contactName: string;
  contactEmail: string;
  contactNumber: string;
  contactMobile: string;
  contactAddress: string;

  teamMembers = [{
    name: '',
    dob: '',
    leader: true,
    contactNumber: '',
    memNo: ''
  }];

  constructor(public settingsService: SettingsService, public runnerService: RunnerService) {
  }

  ngOnInit() {
  }

  nextTab() {
    if (this.currentTab === 1) {
      if (!this.name) {
        this.error = 'Enter a team name';
      } else if (!this.group) {
        this.error = 'Enter a group or unit';
      } else if (!this.category) {
        this.error = 'Choose a team category';
      } else {
        this.error = '';
        this.currentTab++;
      }
    } else if (this.currentTab === 2) {
      if (!this.contactName) {
        this.error = 'Enter a contact name';
      } else if (!this.contactMobile) {
        this.error = 'Enter a mobile number';
      } else if (!this.contactEmail) {
        this.error = 'Enter an email address';
      } else if (!this.contactAddress) {
        this.error = 'Enter a postal address';
      } else {
        if (!this.contactNumber) {
          this.contactNumber = ' ';
        }
        this.error = '';
        this.currentTab++;
      }
    } else if (this.currentTab === 3) {
      if (this.teamMembers.length < 4) {
        this.error = 'Teams must have at least 4 members';
      } else {
        let noErrors = true;
        for (const member of this.teamMembers) {
          if (!member.name || !member.dob) {
            this.error = 'Fill in at least name and DoB for each team member';
            noErrors = false;
          } else if (member.leader && !member.contactNumber) {
            this.error = 'Enter a contact number for team leader';
            noErrors = false;
          }
        }
        if (noErrors) {
          this.uploadRunner();
          // TODO: Confirm to user that its' done!
        }
      }
    } else {
      this.currentTab++;
    }
  }

  prevTab() {
    this.currentTab--;
  }

  setCategory(category: string) {
    console.log('Category is ' + category);
    this.category = category;
  }

  addRunner() {
    this.teamMembers.push({
      name: '',
      dob: '',
      leader: false,
      contactNumber: '',
      memNo: ''
    });
  }

  removeRunner(index: number) {
    this.teamMembers.splice(index, 1);
  }

  uploadRunner() {

    const teamData = {
      name: this.name,
      category: this.category,
      group: this.group,
      members: this.teamMembers,
      contactName: this.contactName,
      contactEmail: this.contactEmail,
      contactNumber: this.contactNumber,
      contactMobile: this.contactMobile,
      contactAddress: this.contactAddress,
    };

    this.settingsService.getCounts().pipe(take(1)).subscribe(settings => {

      let newID = this.pad(parseInt(settings.runnerID, 10) + 1, 3); // Generate new ID
      this.settingsService.updateCounts({runnerID: newID}); // Upload new ID to DB
      newID = 'wr' + newID; // Add 'wr' to the front

      this.runnerService.addRunner(newID, teamData); // Add team to database
      alert('Uploaded to the database!');

    }, error => {
      alert(error); // Alert if error
    });
  }

  pad(n, length) {
    let str = '' + n;
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  }

  alert(message: string) {
    alert(message);
  }

}
