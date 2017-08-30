import {Component, OnInit} from "@angular/core";
import {Warframe} from "./warframe";
import {WarframeService} from "./warframe.service";

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
})
export class DashboardComponent implements OnInit {

  warframes: Warframe[] = [];

  constructor(private warframeService: WarframeService) {}

  ngOnInit(): void {
    this.warframeService.getWarframes()
      .then(warframes => this.warframes = warframes.slice(1,5));
  }
}

