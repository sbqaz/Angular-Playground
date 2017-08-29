import {Component, OnInit} from '@angular/core';

import {Warframe} from "./warframe";
import {WarframeService} from "./warframe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'my-warframes',
  templateUrl: './warframes.component.html',
  styleUrls: ['./warframes.component.css'],
  providers: [WarframeService],
})
export class WarframesComponent implements OnInit {
  warframes: Warframe[];
  selectedWarframe: Warframe;

  constructor(
    private warframeService: WarframeService,
    private router: Router
  ) {}

  getWarframes(): void {
    this.warframeService.getWarframes().then(warframes =>this.warframes = warframes);
  }
  ngOnInit(): void {
    this.getWarframes();
  }

  onSelect(warframe: Warframe): void {
    this.selectedWarframe = warframe;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedWarframe.id])
  }
}

