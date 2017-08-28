import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {AppComponent} from "./app.component";
import {WarframesComponent}  from './warframes.component';
import {WarframeDetailComponent} from "./warframe-detail.component";
import {WarframeService} from "./warframe.service";
import {DashboardComponent} from "./dashboard.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'warframes',
        component: WarframesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    WarframesComponent,
    WarframeDetailComponent
  ],
  providers: [
    WarframeService
  ],
  bootstrap:    [ AppComponent ]
})



export class AppModule { }
