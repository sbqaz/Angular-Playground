
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./Dashboard/dashboard.component";
import {WarframeDetailComponent} from "./Warframe/details/warframe-detail.component";
import {WarframesComponent} from "./Warframe/warframes.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: WarframeDetailComponent },
  { path: 'warframes', component: WarframesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
