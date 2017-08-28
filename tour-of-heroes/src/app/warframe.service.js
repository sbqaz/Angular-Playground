"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_warframes_1 = require("./mock-warframes");
var WarframeService = (function () {
    function WarframeService() {
    }
    WarframeService.prototype.getWarframes = function () {
        return Promise.resolve(mock_warframes_1.WARFRAMES);
    };
    WarframeService.prototype.getWarframesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(_this.getWarframes()); }, 2000);
        });
    };
    return WarframeService;
}());
WarframeService = __decorate([
    core_1.Injectable()
], WarframeService);
exports.WarframeService = WarframeService;
//# sourceMappingURL=warframe.service.js.map