// src/app/services/post.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Post } from '../shared/models/post.dto';
import { finalize, Observable, catchError } from 'rxjs';
import { Comment } from '../shared/models/comment.dto';
import { LoadingService } from './loading.service';
import { ErrorHandlerService } from './error-handler.service'; 

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = environment.serverURL;

  constructor(
    private http: HttpClient,
    private router: Router,
    private loadingService: LoadingService,
    private errorHandler: ErrorHandlerService 
  ) { }

  // Belirtilen kullanıcı ID'sine ait tüm postları getirir
  getPostsByUserId(userId: number): Observable<Post[]> {
    this.loadingService.show();
    return this.http.get<Post[]>(`${this.apiUrl}/posts?userId=${userId}`).pipe(
      catchError(this.errorHandler.handleError.bind(this.errorHandler)), // Hata yönetimi eklendi
      finalize(() => this.loadingService.hide())
    );
  }

  // Kullanıcının gönderi sayfasına yönlendirir
  navigateToUserPosts(userId: number): void {
    this.router.navigate(['/users', userId, 'posts']);
  }

  // Belirtilen post ID'sine göre post detayını getirir
  getPostById(postId: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/posts/${postId}`).pipe(
      catchError(this.errorHandler.handleError.bind(this.errorHandler)) // Hata yönetimi eklendi
    );
  }

  // Post detay sayfasına yönlendirir
  navigateToPostDetail(postId: number): void {
    this.router.navigate(['/posts', postId]);
  }

  // Belirtilen post ID'sine ait yorumları getirir
  getCommentsByPostId(postId: number): Observable<Comment[]> {
    this.loadingService.show();
    return this.http.get<Comment[]>(`${this.apiUrl}/posts/${postId}/comments`).pipe(
      catchError(this.errorHandler.handleError.bind(this.errorHandler)), // Hata yönetimi eklendi
      finalize(() => this.loadingService.hide())
    );
  }
}
