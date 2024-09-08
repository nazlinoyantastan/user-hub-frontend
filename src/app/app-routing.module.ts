import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    title: 'Users',
    loadChildren: () =>
      import('./components/user-list/user-list.module').then(
        (m) => m.UserListModule
      ),
  },
  {
    path: 'users/:id/posts',
    title: 'Posts',
    loadChildren: () =>
      import('./components/user-posts/user-posts.module').then(
        (m) => m.UserPostsModule
      ),
  },
  {
    path: 'posts/:postId',
    title: 'Details',
    loadChildren: () =>
      import('./components/post-detail/post-detail.module').then(
        (m) => m.PostDetailModule
      ),
  },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
