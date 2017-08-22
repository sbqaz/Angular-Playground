import {Component, Input} from "@angular/core";
import {Warframe} from "./warframe";

@Component({
  selector: 'warframe-detail',
  template: `
    <div *ngIf="selectedWarframe">
      <h3>{{selectedWarframe.name}} details!</h3>
      <div><label>id: </label>{{selectedWarframe.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedWarframe.name" placeholder="name">
      </div>
    </div>
  `
})

export class WarframeDetailComponent {
  @Input() warframe: Warframe;
}
