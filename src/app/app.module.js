"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var material_1 = require('@angular/material');
require('hammerjs');
var app_component_1 = require('./app.component');
var profile_component_1 = require('./components/profile/profile.component');
var timeline_component_1 = require('./components/timeline/timeline.component');
var friends_component_1 = require('./components/friends/friends.component');
var followers_component_1 = require('./components/followers/followers.component');
var announcement_component_1 = require('./components/announcement/announcement.component');
var post_component_1 = require('./components/post/post.component');
var update_component_1 = require('./components/update/update.component');
var forum_component_1 = require('./components/forum/forum.component');
var status_component_1 = require('./components/status/status.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                profile_component_1.ProfileComponent,
                timeline_component_1.TimelineComponent,
                friends_component_1.FriendsComponent,
                followers_component_1.FollowersComponent,
                announcement_component_1.AnnouncementComponent,
                post_component_1.PostComponent,
                update_component_1.UpdateComponent,
                forum_component_1.ForumComponent,
                status_component_1.StatusComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                material_1.MaterialModule,
                router_1.RouterModule.forRoot([
                    { path: 'profile/:name', component: profile_component_1.ProfileComponent },
                    { path: 'timeline', component: timeline_component_1.TimelineComponent },
                    { path: 'friends', component: friends_component_1.FriendsComponent },
                    { path: 'followers', component: followers_component_1.FollowersComponent },
                    { path: 'announcement', component: announcement_component_1.AnnouncementComponent },
                    { path: 'post/:title/:body', component: post_component_1.PostComponent },
                    { path: 'update', component: update_component_1.UpdateComponent },
                    { path: 'forum', component: forum_component_1.ForumComponent }
                ])
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
