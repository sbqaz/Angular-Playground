import {Component, OnInit} from '@angular/core';

import {Warframe} from "./warframe";
import {WarframeService} from "./warframe.service";

@Component({
  selector: 'my-warframes',
  template: `
    <h2>Frame library</h2>   
    <ul class="warframes">
      <li *ngFor="let warframe of warframes"
        [class.selected]="warframe === selectedWarframe"
        (click)="onSelect(warframe)">
        <span class="badge">{{warframe.id}}</span> {{warframe.name}}
      </li>
    </ul>
    <warframe-detail [warframe]="selectedWarframe"></warframe-detail>
  `,

  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .warframes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .warframes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .warframes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .warframes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .warframes .text {
    position: relative;
    top: -3px;
  }
  .warframes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
  providers: [WarframeService],
})
export class WarframesComponent implements OnInit {
  warframes: Warframe[];
  selectedWarframe: Warframe;

  constructor(private warframeService: WarframeService) { }

  getWarframes(): void {
    this.warframeService.getWarframes().then(warframes =>this.warframes = warframes);
  }
  ngOnInit(): void {
    this.getWarframes();
  }

  onSelect(warframe: Warframe): void {
    this.selectedWarframe = warframe;
  }
}

