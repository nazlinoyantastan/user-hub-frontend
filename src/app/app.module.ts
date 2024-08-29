import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { UserCardComponent } from './shared/components/user-card/user-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PostCardComponent } from './shared/components/post-card/post-card.component';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserPostsComponent,
    PostDetailComponent,
    UserCardComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
