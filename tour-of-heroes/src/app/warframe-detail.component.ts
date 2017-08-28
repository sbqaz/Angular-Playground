import {Component, Input} from "@angular/core";
import {Warframe} from "./warframe";

@Component({
  selector: 'warframe-detail',
  template: `
    <div *ngIf="warframe">
      <h3>{{warframe.name}} details!</h3>
      <div><label>id: </label>{{warframe.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="warframe.name" placeholder="name">
      </div>
      <div>
        <label>loadout: </label>
        <input [(ngModel)]="warframe.loadout" placeholder="loadout">
      </div>
    </div>
  `
})

export class WarframeDetailComponent {
  @Input() warframe: Warframe;
}
