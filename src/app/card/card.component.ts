import { Component, OnInit, Input, Output, EventEmitter,ViewChild } from '@angular/core';
import { PagetitleService } from '../pagetitle.service';
import { Router } from '@angular/router';
import{AddcartComponent} from '../addcart/addcart.component';
import { SetgetdataService } from '../setgetdata.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  searchText:any;
  @Input() categories:any;
  

  cartlength:number= 0
  data: any[] = [];
 
  constructor(public router:Router,public setget:SetgetdataService) { }

  ngOnInit(): void {
  
  }
  add_cart(data:any){
    data.cart_count++
    if(data.cart_count == 1){
      this.setget.addcartdata.push(data);
      this.cartlength++
    }
  }


}
