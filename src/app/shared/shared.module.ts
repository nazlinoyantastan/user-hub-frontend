import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component'; 
import { CommentCardComponent } from './components/comment-card/comment-card.component'; 
import { PostCardComponent } from './components/post-card/post-card.component'; 
import { CapitalizeFirstLetterPipe } from './pipes/capitalize-first-letter.pipe';

@NgModule({
  declarations: [
    UserCardComponent,
    CommentCardComponent,
    PostCardComponent,
    CapitalizeFirstLetterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserCardComponent,
    CommentCardComponent,
    PostCardComponent,
    CapitalizeFirstLetterPipe 
  ]
})
export class SharedModule { }
