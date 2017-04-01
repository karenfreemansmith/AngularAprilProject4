import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { FriendsComponent } from './components/friends/friends.component';
import { FollowersComponent } from './components/followers/followers.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { PostComponent } from './components/post/post.component';
import { UpdateComponent } from './components/update/update.component';
import { ForumComponent } from './components/forum/forum.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TimelineComponent,
    FriendsComponent,
    FollowersComponent,
    AnnouncementComponent,
    PostComponent,
    UpdateComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: 'profile', component: ProfileComponent },
      { path: 'timeline', component: TimelineComponent },
      { path: 'friends', component: FriendsComponent },
      { path: 'followers', component: FollowersComponent },
      { path: 'announcement', component: AnnouncementComponent },
      { path: 'post', component: PostComponent },
      { path: 'update', component: UpdateComponent },
      { path: 'forum', component: ForumComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
