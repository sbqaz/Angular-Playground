import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {FormsModule} from "@angular/forms";
import {WarframeDetailComponent} from "./warframe-detail.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    WarframeDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
