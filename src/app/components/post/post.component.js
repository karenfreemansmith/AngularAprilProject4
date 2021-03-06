"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var PostComponent = (function () {
    function PostComponent(route) {
        var _this = this;
        this.route = route;
        this.title = "";
        this.body = "";
        this.route.params.subscribe(function (params) { return _this.title = params.title; });
        this.route.params.subscribe(function (params) { return _this.body = params.body; });
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent = __decorate([
        core_1.Component({
            selector: 'app-post',
            templateUrl: './post.component.html',
            styleUrls: ['./post.component.css']
        })
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
