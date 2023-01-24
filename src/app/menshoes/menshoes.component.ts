import { Component, OnInit } from '@angular/core';
import { PagetitleService } from '../pagetitle.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menshoes',
  templateUrl: './menshoes.component.html',
  styleUrls: ['./menshoes.component.scss']
})
export class MenshoesComponent implements OnInit {
  url:string= "https://raw.githubusercontent.com/LakkamTejasri/shopping-add-cart/master/src/assets/data/shoescategory/menshoesdetails.json"
 
  constructor(public category:PagetitleService, public http:HttpClient) { }
  mensdata:any
  ngOnInit(): void {
   this.http.get(this.url).subscribe((data)=>{
     this.mensdata= data
   })
  }
}
