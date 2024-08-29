import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';

const routes: Routes = [
  { path: 'users', title:'Users', component: UserListComponent },
  { path: 'users/:id/posts', title:'Posts', component: UserPostsComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
