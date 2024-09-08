import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post.dto';
import { Comment } from '../../shared/models/comment.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { SearchService } from '../../services/search.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {


  postId!: number;
  post!: Post;
  comments: Comment[] = [];
  filteredComments: Comment[] = [];
 

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router,
    private searchService: SearchService,
    private location: Location
  ) { }


  ngOnInit(): void {  //bileşen yüklendiğinde rota parametrelerinden postId alarak ilgili post ve yorumları yükler

    this.route.paramMap.subscribe(params => {
      const id = params.get('postId');
      if (id) {
        this.postId = +id;
        this.loadPost();
        this.loadComments();
      } else {
        console.error('Post ID not found in route parameters');
      }
    });

    this.searchService.searchTerm$.subscribe(term => {
      this.filterComments(term);
    });
  }

  loadPost(): void { //postları yüklüyor
    this.postService.getPostById(this.postId).subscribe(post => {
      this.post = post;
    });
  }

  loadComments(): void { //yorumları yüklüyor
    this.postService.getCommentsByPostId(this.postId).subscribe(comments => {
      this.comments = comments;
      this.filteredComments = comments;
    });
  }

  filterComments(searchTerm: string): void {  //arama terimine göre yorumları filtreler

    if (searchTerm) {
      this.filteredComments = this.comments.filter(comment =>
        comment.body.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredComments = this.comments;
    }
  }


  goBack() { //bir önceki sayfaya geri döner
    this.location.back();
  }

}
