import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   recievedAdd: any;
  constructor(private router: Router,
    private sharedService: SharedService) { }
 
  ngOnInit(): void {
    console.log(this.sharedService.recieveMessage())
    
  }
}
