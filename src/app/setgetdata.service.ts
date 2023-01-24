import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetgetdataService {

  addcartdata:any[] =[];
  constructor() { }

  setdata(data:any){
    this.addcartdata = data;
  }
  // add_item(id:any){
  //   let index = this.addcartdata.findIndex((book:any)=>book.id==id)
  //   this.addcartdata[index].cart_count++
  //   return this.addcartdata
  // }
  // remove_item(id:any){
  //   let index = this.addcartdata.findIndex((book:any)=>book.id==id)
  //   this.addcartdata[index].cart_count--
  //   return this.addcartdata
  // }
}
