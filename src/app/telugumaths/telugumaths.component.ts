import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-telugumaths',
  templateUrl: './telugumaths.component.html',
  styleUrls: ['./telugumaths.component.scss']
})
export class TelugumathsComponent implements OnInit {
  mathsbookdata:any
  url:string = "../../assets/data/telugubooks/mathbook.json";
  // apiurl:string ="https://jsonplaceholder.typicode.com/todos/"

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((data)=>{
      console.log(data);
      this.mathsbookdata = data
    })
  }

}
