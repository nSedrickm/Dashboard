import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requests: any;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.fetchRequests()
  }
  fetchRequests() {
    this.databaseService.getAllRequests()
      .subscribe(
        data => {
          this.requests = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
