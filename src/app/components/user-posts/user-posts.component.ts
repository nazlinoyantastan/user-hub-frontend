import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../shared/models/post.dto'; 


@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit{

  userId! : number;
  posts: Post[] = [];

  constructor(
    private route: ActivatedRoute, // URL parametrelerini almak için
    private postService: PostService // Postları almak için servis
  ) {}



  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id'); // URL'deki 'id' parametresini alır
      if (id !== null) { // Null kontrolü yapılıyor
        this.userId = +id; // 'id' parametresini sayıya çevirip atıyoruz
        this.loadPosts(); // Postları yüklemek için fonksiyon çağrılır
      } else {
        console.error('User ID not found in route parameters'); // Hata durumunda mesaj gösterilir
      }
    });
  }

  loadPosts(): void {
    this.postService.getPostsByUserId(this.userId).subscribe(posts => {
      this.posts = posts; // Postları atayın
      
    });
  }


}
