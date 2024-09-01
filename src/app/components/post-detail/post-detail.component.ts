import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post.dto';
import { Comment } from '../../shared/models/comment.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent implements OnInit {


  postId!: number;
  post!: Post;
  comments: Comment[] = [];


  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) { }


  ngOnInit(): void {

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
  }

  loadPost(): void {
    this.postService.getPostById(this.postId).subscribe(post => {
      this.post = post;
    });
  }

  loadComments(): void {
    this.postService.getCommentsByPostId(this.postId).subscribe(comments => {
      this.comments = comments;
    });
  }


  goBack(): void {
    this.router.navigate(['/users', this.post.userId, 'posts']);
  }

}
