import { Component } from '@angular/core';

const WARFRAMES: Warframe[] = [
  {id: 1, name: 'Excalibur', loadout: 'Melee'},
  {id: 2, name: 'Nova Prime', loadout: 'CC'},
  {id: 3, name: 'Nyx Prime', loadout: 'CC'},
  {id: 4, name: 'Ash Prime', loadout: 'Stealth'},
  {id: 5, name: 'Oberon Prime', loadout: 'Support'},
  {id: 6, name: 'Trinity Prime', loadout: 'Support'},
  {id: 7, name: 'Equinox', loadout: 'Nuke'},
  {id: 8, name: 'Limbo', loadout: 'Nuke'},
];

export class Warframe {
  id: number;
  name: string;
  loadout: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    
    <h2>Frame library</h2>
    <ul class="warframes">
      <li *ngFor="let warframe of warframes" (click)="onselect(warframe)">
        <span class="badge">{{warframe.id}}</span> {{warframe.name}}
        <!-- warframes are listed here -->
      </li>
    </ul>
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
`]
})
export class AppComponent  {
  title = 'Angular';
  warframes = WARFRAMES;
  selectedWarframe: Warframe;
}

