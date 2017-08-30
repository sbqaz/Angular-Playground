import {Component, OnInit} from '@angular/core';

import {Warframe} from "./Warframe";
import {WarframeService} from "./services/warframe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'my-warframes',
  templateUrl: './styling/warframes.component.html',
  styleUrls: [
    './styling/warframes.component.css',
    './styling/top-frames.component.css'
  ],
  providers: [WarframeService],
})
export class WarframesComponent implements OnInit {
  warframes: Warframe[];
  topWarframes: Warframe[] = [];
  selectedWarframe: Warframe;

  constructor(
    private warframeService: WarframeService,
    private router: Router
  ) {}

  getWarframes(): void {
    this.warframeService.getWarframes().then(warframes =>this.warframes = warframes);
    this.warframeService.getWarframes()
      .then(warframes => this.topWarframes = warframes.slice(0,4));
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

  add(name: string): void {
    name = name.trim();
    if (!name) {return}
    this.warframeService.create(name)
      .then(warframe => {
        this.warframes.push(warframe);
        this.selectedWarframe = null;
      });
  }

  delete(warframe: Warframe): void {
    this.warframeService
      .delete(warframe.id)
      .then(() => {
        this.warframes = this.warframes.filter(h => h !== warframe);
        if (this.selectedWarframe === warframe) {this.selectedWarframe = null;}
      });
  }
}

