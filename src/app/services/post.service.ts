import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Post } from '../shared/models/post.dto';
import { Observable } from 'rxjs';
import { Comment } from '../shared/models/comment.dto';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = environment.serverURL;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getPostsByUserId(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts?userId=${userId}`);
  }

  navigateToUserPosts(userId: number): void {
    this.router.navigate(['/users', userId, 'posts']);
  }

  getPostById(postId: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/posts/${postId}`);
  }

  navigateToPostDetail(postId: number): void {
    this.router.navigate(['/posts', postId]);
  }

  getCommentsByPostId(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/posts/${postId}/comments`);
  }


}
