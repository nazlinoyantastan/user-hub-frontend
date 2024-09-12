import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Post } from '../shared/models/post.dto';
import { finalize, Observable } from 'rxjs';
import { Comment } from '../shared/models/comment.dto';
import { LoadingService } from './loading.service';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = environment.serverURL;

  constructor(
    private http: HttpClient,
    private router: Router,
    private loadingService: LoadingService
  ) { }

  // Belirtilen kullanıcı ID'sine ait tüm postları getirir
  getPostsByUserId(userId: number): Observable<Post[]> {
    this.loadingService.show(); // Yüklenme göstergesini başlatır
    return this.http.get<Post[]>(`${this.apiUrl}/posts?userId=${userId}`).pipe(
      finalize(() => this.loadingService.hide()) // İstek tamamlandığında yüklenme göstergesini kapatır
    );
  }


  // Kullanıcının gönderi sayfasına yönlendirir
  navigateToUserPosts(userId: number): void {
    this.router.navigate(['/users', userId, 'posts']);
  }

  // Belirtilen post ID'sine göre post detayını getirir
  getPostById(postId: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/posts/${postId}`);
  }

  // Post detay sayfasına yönlendirir
  navigateToPostDetail(postId: number): void {
    this.router.navigate(['/posts', postId]);
  }

  // Belirtilen post ID'sine ait yorumları getirir
  getCommentsByPostId(postId: number): Observable<Comment[]> {
    this.loadingService.show();
    return this.http.get<Comment[]>(`${this.apiUrl}/posts/${postId}/comments`).pipe(
      finalize(() => this.loadingService.hide())
    );
  }


}
