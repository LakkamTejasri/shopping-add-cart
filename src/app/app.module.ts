import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from  '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MenshirtsComponent } from './menshirts/menshirts.component';
import { WomenshirtsComponent } from './womenshirts/womenshirts.component';
import { ShoppinglistDirective } from './shoppinglist.directive';
import { PagetitleService } from './pagetitle.service';
import { MenshoesComponent } from './menshoes/menshoes.component';
import { WomenshoesComponent } from './womenshoes/womenshoes.component';
import { CardComponent } from './card/card.component';
import { MenjeansComponent } from './menjeans/menjeans.component';
import { WomenjeansComponent } from './womenjeans/womenjeans.component';
import { TelugumathsComponent } from './telugumaths/telugumaths.component';
import { TeluguscienceComponent } from './teluguscience/teluguscience.component';
import { EngmathbooksComponent } from './engmathbooks/engmathbooks.component';
import { EngsciencebooksComponent } from './engsciencebooks/engsciencebooks.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { AddcartComponent } from './addcart/addcart.component';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    MenshirtsComponent,
    WomenshirtsComponent,
    ShoppinglistDirective,
    MenshoesComponent,
    WomenshoesComponent,
    CardComponent,
    MenjeansComponent,
    WomenjeansComponent,
    TelugumathsComponent,
    TeluguscienceComponent,
    EngmathbooksComponent,
    EngsciencebooksComponent,
    FilterPipe,
    AddcartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatRadioModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatBadgeModule
   
  ],
  providers: [PagetitleService,MatSidenavModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
