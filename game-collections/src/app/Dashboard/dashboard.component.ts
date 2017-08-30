import {Component, OnInit} from "@angular/core";
import {Warframe} from "../Warframe/warframe";
import {WarframeService} from "../Warframe/services/warframe.service";

@Component({
  selector: 'my-dashboard',
  templateUrl: './styling/dashboard.component.html',
  styleUrls: [ './styling/dashboard.component.css' ],
})
export class DashboardComponent implements OnInit {

  warframes: Warframe[] = [];

  constructor(private warframeService: WarframeService) {}

  ngOnInit(): void {
    this.warframeService.getWarframes()
      .then(warframes => this.warframes = warframes.slice(1,5));
  }
}

