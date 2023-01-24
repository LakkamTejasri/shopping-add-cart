import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-womenshoes',
  templateUrl: './womenshoes.component.html',
  styleUrls: ['./womenshoes.component.scss']
})
export class WomenshoesComponent implements OnInit {

  url:string= "../../assets/data/shoescategory/womenshoes.json"
 
  constructor(public http:HttpClient) { }
  mensdata:any
  ngOnInit(): void {
   this.http.get(this.url).subscribe((data)=>{
     this.mensdata= data
   })
  }

}
