
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {WarframeDetailComponent} from "./warframe-detail.component";
import {WarframesComponent} from "./warframes.component";
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
