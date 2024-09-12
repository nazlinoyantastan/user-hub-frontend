import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component'; 
import { CommentCardComponent } from './components/comment-card/comment-card.component'; 
import { PostCardComponent } from './components/post-card/post-card.component'; 
import { CapitalizeFirstLetterPipe } from './pipes/capitalize-first-letter.pipe';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    UserCardComponent,
    CommentCardComponent,
    PostCardComponent,
    CapitalizeFirstLetterPipe,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserCardComponent,
    CommentCardComponent,
    PostCardComponent,
    CapitalizeFirstLetterPipe,
    LoadingSpinnerComponent 
  ]
})
export class SharedModule { }
