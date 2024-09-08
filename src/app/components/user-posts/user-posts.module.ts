import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPostsComponent } from './user-posts.component';
import { UserPostsRoutingModule } from './user-posts-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    UserPostsComponent,
  ],
  imports: [
    CommonModule, 
    UserPostsRoutingModule,
    SharedModule
  ],
})
export class UserPostsModule { }
