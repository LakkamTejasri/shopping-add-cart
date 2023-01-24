import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavbarService } from './sidenavbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  // @ViewChild('sidenav') public sidenav: MatSidenav | any;
  // constructor(private sidenavService: SidenavbarService) { }
  ngOnInit(): void {
    
  }
 

}
