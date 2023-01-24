import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PagetitleService {

  constructor(public http:HttpClient) { 
  }

  pageTitles = [
    {titles: "home title"},
    {titles : "dashboard title"},
    {titles:"about title"}
  ]


}
