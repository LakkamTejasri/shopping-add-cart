import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcartComponent } from './addcart/addcart.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EngmathbooksComponent } from './engmathbooks/engmathbooks.component';
import { EngsciencebooksComponent } from './engsciencebooks/engsciencebooks.component';
import { HomeComponent } from './home/home.component';
import { MenjeansComponent } from './menjeans/menjeans.component';
import { MenshirtsComponent } from './menshirts/menshirts.component';
import { MenshoesComponent } from './menshoes/menshoes.component';
import { TelugumathsComponent } from './telugumaths/telugumaths.component';
import { TeluguscienceComponent } from './teluguscience/teluguscience.component';
import { WomenjeansComponent } from './womenjeans/womenjeans.component';
import { WomenshirtsComponent } from './womenshirts/womenshirts.component';
import { WomenshoesComponent } from './womenshoes/womenshoes.component';

const routes: Routes = [
  {path:"home",component:HomeComponent,title:"home title"},
  {path:"dashborad", component:DashboardComponent,title:"dashborad"},
  {path:"menshirts", component:MenshirtsComponent,title:"men cat"},
  {path:"womenshirts", component:WomenshirtsComponent,title:"dashborad"},
  {path:"menshoes" , component:MenshoesComponent,title:"shoes"},
  {path:"womenshoes",component:WomenshoesComponent,title:"women"},
  {path:"menjeans",component:MenjeansComponent,title:"women"},
  {path:"womenjeans",component:WomenjeansComponent,title:"women"},
  {path:"telugumathbook",component:TelugumathsComponent,title:"maths books"},
  {path:"telugusciencebooks",component:TeluguscienceComponent,title:"science books"},
  {path:"engmathebooks",component:EngmathbooksComponent,title:"maths books"},
  {path:"engsciencebooks",component:EngsciencebooksComponent,title:"science books"},
  {path:"addcart",component:AddcartComponent,title:"add cart"},
  {path:"card",component:CardComponent,title:"card Title"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
