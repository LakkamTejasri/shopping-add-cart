import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // @Output() title =new EventEmitter()
  
  constructor() { }
  ngOnInit(): void {
    // this.title.emit("dashboard title")
  }

}
