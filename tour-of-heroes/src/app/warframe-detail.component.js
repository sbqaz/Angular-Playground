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
var warframe_1 = require("./warframe");
var WarframeDetailComponent = (function () {
    function WarframeDetailComponent() {
    }
    return WarframeDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", warframe_1.Warframe)
], WarframeDetailComponent.prototype, "warframe", void 0);
WarframeDetailComponent = __decorate([
    core_1.Component({
        selector: 'warframe-detail',
        template: "\n    <div *ngIf=\"selectedWarframe\">\n      <h3>{{selectedWarframe.name}} details!</h3>\n      <div><label>id: </label>{{selectedWarframe.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"selectedWarframe.name\" placeholder=\"name\">\n      </div>\n    </div>\n  "
    })
], WarframeDetailComponent);
exports.WarframeDetailComponent = WarframeDetailComponent;
//# sourceMappingURL=warframe-detail.component.js.map