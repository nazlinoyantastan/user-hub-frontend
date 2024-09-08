import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserListRoutingModule } from './user-list-routing.module'; 
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    UserListComponent,
    
  ],
  imports: [
    CommonModule, 
    UserListRoutingModule,
    SharedModule
  ],
})
export class UserListModule {}
