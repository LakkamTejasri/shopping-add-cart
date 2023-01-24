import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PagetitleService } from '../pagetitle.service';
import { SidenavbarService } from '../sidenavbar.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() headtitle:any;
  @Output() pagetitle = new EventEmitter()
  // @Output() sidenavbar = new EventEmitter();
  pagenav: any;

  constructor(public pt:PagetitleService,public SidenavService:SidenavbarService) { }

  ngOnInit(): void {
  }
  navlist = ['home','dashborad','about']
  
  xyz(ind:any){
      this.pagetitle.emit(this.pt.pageTitles[ind]); 
  }

  openSidenav() {
    this.SidenavService.open()
  }

  // sidenav(){
  //  this.sidenavbar.emit(true)
  // }
 
  // sidenav(){
  //   this.sidenavbar.emit(this.SidenavService.open())
  // }
  
}
