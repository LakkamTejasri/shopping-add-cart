import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavbarService {

  private sidenav:MatSidenav | any
 
  public setSidenav(sidenav:MatSidenav){
    this.sidenav = sidenav;
  }
  public open(){
    this.sidenav.open();
  }
  public close(){
    this.sidenav.close()
  }
  public toggle(){
    this.sidenav.toggle()
  }
}
