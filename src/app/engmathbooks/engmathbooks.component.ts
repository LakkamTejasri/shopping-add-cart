import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engmathbooks',
  templateUrl: './engmathbooks.component.html',
  styleUrls: ['./engmathbooks.component.scss']
})
export class EngmathbooksComponent implements OnInit {

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
