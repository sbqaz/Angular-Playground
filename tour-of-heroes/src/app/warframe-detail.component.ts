import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Location} from "@angular/common";
import 'rxjs/add/operator/switchMap'

import {WarframeService} from "./warframe.service";
import {Warframe} from "./warframe";

@Component({
  selector: 'warframe-detail',
  templateUrl: './warframe-detail.component.html',
  styleUrls: [ './warframe-detail.component.css' ],
})

export class WarframeDetailComponent implements OnInit{
  warframe: Warframe;

  constructor(
    private warframeService: WarframeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.warframeService.getWarframe(+params.get('id')))
      .subscribe(warframe => this.warframe = warframe);
  }

  goBack(): void {
    this.location.back();
  }
}
