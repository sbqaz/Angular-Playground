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
var warframe_service_1 = require("./services/warframe.service");
var router_1 = require("@angular/router");
var WarframesComponent = (function () {
    function WarframesComponent(warframeService, router) {
        this.warframeService = warframeService;
        this.router = router;
        this.topWarframes = [];
    }
    WarframesComponent.prototype.getWarframes = function () {
        var _this = this;
        this.warframeService.getWarframes().then(function (warframes) { return _this.warframes = warframes; });
        this.warframeService.getWarframes()
            .then(function (warframes) { return _this.topWarframes = warframes.slice(0, 4); });
    };
    WarframesComponent.prototype.ngOnInit = function () {
        this.getWarframes();
    };
    WarframesComponent.prototype.onSelect = function (warframe) {
        this.selectedWarframe = warframe;
    };
    WarframesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedWarframe.id]);
    };
    WarframesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.warframeService.create(name)
            .then(function (warframe) {
            _this.warframes.push(warframe);
            _this.selectedWarframe = null;
        });
    };
    WarframesComponent.prototype.delete = function (warframe) {
        var _this = this;
        this.warframeService
            .delete(warframe.id)
            .then(function () {
            _this.warframes = _this.warframes.filter(function (h) { return h !== warframe; });
            if (_this.selectedWarframe === warframe) {
                _this.selectedWarframe = null;
            }
        });
    };
    return WarframesComponent;
}());
WarframesComponent = __decorate([
    core_1.Component({
        selector: 'my-warframes',
        templateUrl: './styling/warframes.component.html',
        styleUrls: [
            './styling/warframes.component.css',
            './styling/top-frames.component.css'
        ],
        providers: [warframe_service_1.WarframeService],
    }),
    __metadata("design:paramtypes", [warframe_service_1.WarframeService,
        router_1.Router])
], WarframesComponent);
exports.WarframesComponent = WarframesComponent;
//# sourceMappingURL=warframes.component.js.map