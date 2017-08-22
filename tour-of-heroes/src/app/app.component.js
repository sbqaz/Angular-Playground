"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var WARFRAMES = [
    { id: 1, name: 'Excalibur', loadout: 'Melee' },
    { id: 2, name: 'Nova Prime', loadout: 'CC' },
    { id: 3, name: 'Nyx Prime', loadout: 'CC' },
    { id: 4, name: 'Ash Prime', loadout: 'Stealth' },
    { id: 5, name: 'Oberon Prime', loadout: 'Support' },
    { id: 6, name: 'Trinity Prime', loadout: 'Support' },
    { id: 7, name: 'Equinox', loadout: 'Nuke' },
    { id: 8, name: 'Limbo', loadout: 'Nuke' },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular';
        this.warframes = WARFRAMES;
    }
    AppComponent.prototype.onSelect = function (warframe) {
        this.selectedWarframe = warframe;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <h2>Frame library</h2>   \n    <ul class=\"warframes\">\n      <li *ngFor=\"let warframe of warframes\"\n        [class.selected]=\"warframe === selectedWarframe\"\n        (click)=\"onSelect(warframe)\">\n        <span class=\"badge\">{{warframe.id}}</span> {{warframe.name}}\n      </li>\n    </ul>\n    <warframe-detail [warframe]=\"selectedWarframe\"></warframe-detail>\n  ",
        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .warframes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .warframes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .warframes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .warframes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .warframes .text {\n    position: relative;\n    top: -3px;\n  }\n  .warframes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map