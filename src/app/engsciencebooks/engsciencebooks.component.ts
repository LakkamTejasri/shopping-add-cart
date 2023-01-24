import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engsciencebooks',
  templateUrl: './engsciencebooks.component.html',
  styleUrls: ['./engsciencebooks.component.scss']
})
export class EngsciencebooksComponent implements OnInit {

  sciencedata:any
url:string="../../assets/data/telugubooks/sciencebooks.json"
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((data)=>{this.sciencedata = data})
  }
}
