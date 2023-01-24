import { Component, OnInit } from '@angular/core';
import { PagetitleService } from '../pagetitle.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-womenshirts',
  templateUrl: './womenshirts.component.html',
  styleUrls: ['./womenshirts.component.scss']
})
export class WomenshirtsComponent implements OnInit {
  mensdata:any
  url:string="https://raw.githubusercontent.com/LakkamTejasri/shopping-add-cart/master/src/assets/data/shirts-category/womenshirts.json"

  constructor(public categorydata:PagetitleService, public http:HttpClient) { }

  ngOnInit(): void {

    this.http.get(this.url).subscribe((data)=>{
    this.mensdata = data
    })
  }

}
