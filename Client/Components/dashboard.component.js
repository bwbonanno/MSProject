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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var get_service_1 = require('../Services/get.service');
var DashboardComponent = (function () {
    function DashboardComponent(getService, router) {
        this.getService = getService;
        this.router = router;
        var loggedIn = sessionStorage.getItem("loggedIn");
        if (!loggedIn)
            this.router.navigateByUrl('/home');
        else
            this.email = JSON.parse(sessionStorage.getItem("userInfo")).Email;
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            providers: [get_service_1.GetService],
            templateUrl: 'Templates/dashboard.html'
        }), 
        __metadata('design:paramtypes', [get_service_1.GetService, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map