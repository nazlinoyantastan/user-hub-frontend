import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail.component';
import { PostDetailRoutingModule } from './post-detail-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PostDetailComponent
  ],
  imports: [
    CommonModule, 
    PostDetailRoutingModule,
    SharedModule
  ],
})
export class PostDetailModule { }
