import { Component, OnInit } from '@angular/core';
import { PagetitleService } from '../pagetitle.service';
// import * as data from '../../assets/shirts-category/menshirts.json'
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-menshirts',
  templateUrl: './menshirts.component.html',
  styleUrls: ['./menshirts.component.scss']
})
export class MenshirtsComponent implements OnInit {
  url:string="../../assets/data/shirts-category/menshirts.json"
  // shirtscategorydat:any;
  
  constructor(public categorydata:PagetitleService,public http:HttpClient) { 

  }
  mensdata:any

  ngOnInit(): void {
        this.http.get(this.url).subscribe((data)=>{console.log(data)
        this.mensdata =data})


    // console.log(this.categorydata.shirtscategorydata.men)
    // this.http.get(this.url).subscribe((shirtscategory)=>{
    //   console.log(shirtscategory)
    //   this.shirtscategorydata = shirtscategory
    // this.shirtscategorydat = this.categorydata.shirtscategorydata
    // })
  }
 

 

}
