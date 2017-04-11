"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var StatusComponent = (function () {
    function StatusComponent() {
    }
    StatusComponent.prototype.ngOnInit = function () {
    };
    StatusComponent = __decorate([
        core_1.Component({
            selector: 'app-status',
            inputs: ['name', 'status'],
            templateUrl: './status.component.html',
            styleUrls: ['./status.component.css']
        })
    ], StatusComponent);
    return StatusComponent;
}());
exports.StatusComponent = StatusComponent;
