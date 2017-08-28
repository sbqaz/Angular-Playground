"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var warframe_service_1 = require("./warframe.service");
var WarframesComponent = (function () {
    function WarframesComponent(warframeService) {
        this.warframeService = warframeService;
    }
    WarframesComponent.prototype.getWarframes = function () {
        var _this = this;
        this.warframeService.getWarframes().then(function (warframes) { return _this.warframes = warframes; });
    };
    WarframesComponent.prototype.ngOnInit = function () {
        this.getWarframes();
    };
    WarframesComponent.prototype.onSelect = function (warframe) {
        this.selectedWarframe = warframe;
    };
    return WarframesComponent;
}());
WarframesComponent = __decorate([
    core_1.Component({
        selector: 'my-warframes',
        template: "\n    <h2>Frame library</h2>   \n    <ul class=\"warframes\">\n      <li *ngFor=\"let warframe of warframes\"\n        [class.selected]=\"warframe === selectedWarframe\"\n        (click)=\"onSelect(warframe)\">\n        <span class=\"badge\">{{warframe.id}}</span> {{warframe.name}}\n      </li>\n    </ul>\n    <warframe-detail [warframe]=\"selectedWarframe\"></warframe-detail>\n  ",
        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .warframes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .warframes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .warframes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .warframes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .warframes .text {\n    position: relative;\n    top: -3px;\n  }\n  .warframes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"],
        providers: [warframe_service_1.WarframeService],
    }),
    __metadata("design:paramtypes", [warframe_service_1.WarframeService])
], WarframesComponent);
exports.WarframesComponent = WarframesComponent;
//# sourceMappingURL=warframes.component.js.map