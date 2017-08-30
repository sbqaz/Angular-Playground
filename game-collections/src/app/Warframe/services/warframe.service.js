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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var WarframeService = (function () {
    function WarframeService(http) {
        this.http = http;
        this.warframesUrl = 'api/warframes'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-type': 'application/json' });
    }
    WarframeService.prototype.getWarframes = function () {
        return this.http.get(this.warframesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    WarframeService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    WarframeService.prototype.getWarframe = function (id) {
        var url = this.warframesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    WarframeService.prototype.update = function (warframe) {
        var url = this.warframesUrl + "/" + warframe.id;
        return this.http
            .put(url, JSON.stringify(warframe), { headers: this.headers })
            .toPromise()
            .then(function () { return warframe; })
            .catch(this.handleError);
    };
    WarframeService.prototype.create = function (name) {
        return this.http
            .post(this.warframesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    WarframeService.prototype.delete = function (id) {
        var url = this.warframesUrl + "/" + id + "}";
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return WarframeService;
}());
WarframeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], WarframeService);
exports.WarframeService = WarframeService;
//# sourceMappingURL=warframe.service.js.map