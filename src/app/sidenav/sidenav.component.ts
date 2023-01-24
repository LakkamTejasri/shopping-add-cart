import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { HttpClient } from '@angular/common/http';
import * as data from '../../assets/data/datalist.json'
import { SidenavbarService } from '../sidenavbar.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  title:any;
  // jsondata:any= (data as any).default;
  // events:any = this.jsondata;
  subcategoryHideandShow:boolean = false;
  subcomponents:any =[];
  bgcol = 0;
  subcat:any ;
  url:string = "../../assets/data/datalist.json"
  @ViewChild('sidenav', {static: true}) public sidenav!: MatSidenav;
  constructor(private sidenavService: SidenavbarService,public http:HttpClient) { }
 
  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav)
    this.http.get(this.url).subscribe((getdata)=>{
      console.log(getdata)
      this.subcat = getdata;
    })
  }
  getvalu(e:Event){
    this.title = e;
   }
   sidenavclose(){
     this.sidenavService.close()
   }
  

  //  subcategery(ind:any){
  //   this.subcat = this.events;
  //  }
  closemenu(){
    this.sidenavService.close()

  }
  subcattoggle(ind:any){
    this.subcomponents = ind
    this.subcategoryHideandShow = true;
    // this.subcategoryHideandShow = !this.subcategoryHideandShow;
    // this.subcategoryHideandShow = 
    
  }

}
