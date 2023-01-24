import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-womenjeans',
  templateUrl: './womenjeans.component.html',
  styleUrls: ['./womenjeans.component.scss']
})
export class WomenjeansComponent implements OnInit {

  url:string= "../../assets/data/jeanscategory/womenjeans.json"
 
  constructor(public http:HttpClient) { }
  mensdata:any
  ngOnInit(): void {
   this.http.get(this.url).subscribe((data)=>{
     this.mensdata= data
   })
  }

}
