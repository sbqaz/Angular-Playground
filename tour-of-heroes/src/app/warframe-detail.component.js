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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var warframe_service_1 = require("./warframe.service");
var WarframeDetailComponent = (function () {
    function WarframeDetailComponent(warframeService, route, location) {
        this.warframeService = warframeService;
        this.route = route;
        this.location = location;
    }
    WarframeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.warframeService.getWarframe(+params.get('id')); })
            .subscribe(function (warframe) { return _this.warframe = warframe; });
    };
    WarframeDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return WarframeDetailComponent;
}());
WarframeDetailComponent = __decorate([
    core_1.Component({
        selector: 'warframe-detail',
        templateUrl: './warframe-detail.component.html',
        styleUrls: ['./warframe-detail.component.css'],
    }),
    __metadata("design:paramtypes", [warframe_service_1.WarframeService,
        router_1.ActivatedRoute,
        common_1.Location])
], WarframeDetailComponent);
exports.WarframeDetailComponent = WarframeDetailComponent;
//# sourceMappingURL=warframe-detail.component.js.map