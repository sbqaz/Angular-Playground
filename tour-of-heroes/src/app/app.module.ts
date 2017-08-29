import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {WarframesComponent}  from './warframes.component';
import {WarframeDetailComponent} from "./warframe-detail.component";
import {WarframeService} from "./warframe.service";
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    WarframesComponent,
    WarframeDetailComponent
  ],
  providers: [ WarframeService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
