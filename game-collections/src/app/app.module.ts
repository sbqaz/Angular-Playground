import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppRoutingModule} from "./app-routing.module";

import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./Warframe/services/in-memory-data.service";

import {AppComponent} from "./app.component";
import {WarframesComponent}  from './Warframe/warframes.component';
import {WarframeDetailComponent} from "./Warframe/details/warframe-detail.component";
import {WarframeService} from "./Warframe/services/warframe.service";
import {DashboardComponent} from "./Dashboard/dashboard.component";
import {WarframeSearchComponent} from "./Warframe/search/warframe-search.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    WarframesComponent,
    WarframeDetailComponent,
    WarframeSearchComponent
  ],
  providers: [ WarframeService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
