import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { UserCardComponent } from './shared/components/user-card/user-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PostCardComponent } from './shared/components/post-card/post-card.component';
import { CommentCardComponent } from './shared/components/comment-card/comment-card.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserPostsComponent,
    PostDetailComponent,
    UserCardComponent,
    PostCardComponent,
    CommentCardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
