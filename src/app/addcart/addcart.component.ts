import { Component, Input, OnInit } from '@angular/core';
import { SetgetdataService } from '../setgetdata.service';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.scss']
})
export class AddcartComponent implements OnInit {

  // @Input() valu:any[] =[]
  // @Input() getdata:any
  data:any[] =[];
  // count:number[] =[]
  count:number = 0;
  // cartlength:number =1
  constructor(public setget:SetgetdataService) { }

  ngOnInit(): void {
   this.data = this.setget.addcartdata
  }
  add_item(id:any){
    let index = this.data.findIndex((book:any)=>book.id==id)
    this.data[index].cart_count++
   
  }
  remove_item(id:any){
    let index = this.data.findIndex((book:any)=>book.id==id)

    if(this.data[index].cart_count <= 1){
      this.data.splice(index, 1);
    }
    else{
      this.data[index].cart_count--
    }
      

  }

}
