import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menjeans',
  templateUrl: './menjeans.component.html',
  styleUrls: ['./menjeans.component.scss']
})
export class MenjeansComponent implements OnInit {

  url:string= "https://raw.githubusercontent.com/LakkamTejasri/shopping-add-cart/master/src/assets/data/jeanscategory/menjeans.json"
 
  constructor(public http:HttpClient) { }
  mensdata:any
  ngOnInit(): void {
   this.http.get(this.url).subscribe((data)=>{
     this.mensdata= data
   })
  }
}
