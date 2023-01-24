import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teluguscience',
  templateUrl: './teluguscience.component.html',
  styleUrls: ['./teluguscience.component.scss']
})
export class TeluguscienceComponent implements OnInit {
  sciencedata:any
url:string="https://raw.githubusercontent.com/LakkamTejasri/shopping-add-cart/master/src/assets/data/telugubooks/sciencebooks.json"
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((data)=>{this.sciencedata = data})
  }

}
