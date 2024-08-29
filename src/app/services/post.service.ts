import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Post } from '../shared/models/post.dto';
import { Observable } from 'rxjs';


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
}
