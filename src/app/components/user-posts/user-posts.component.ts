import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../shared/models/post.dto';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { UserService } from '../../services/user.service';
import { User } from '../../shared/models/user.dto';


@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  userId!: number;
  userName: string = '';
  posts: Post[] = [];
  filteredPosts: Post[] = [];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router,
    private searchService: SearchService,
    private userService: UserService
  ) { }



  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.userId = +id;
        this.loadUserDetails();
        this.loadPosts();
      } else {
        console.error('User ID not found in route parameters');
      }
    });

    this.searchService.searchTerm$.subscribe((term) => {
      this.filterPosts(term);
    });
  }

  loadUserDetails(): void {
    this.userService.getUserById(this.userId).subscribe(
      (user: User) => { 
        this.userName = user.name; 
      },
      (error) => {
        console.error('Error loading user details', error);
      }
    );
  }

  loadPosts(): void {
    this.postService.getPostsByUserId(this.userId).subscribe(posts => {
      this.posts = posts;
      this.filteredPosts = posts;
    });
  }

  filterPosts(searchTerm: string): void {

    if (searchTerm) {
      this.filteredPosts = this.posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredPosts = this.posts;
    }
  }

  goToPostDetail(postId: number): void {

    this.router.navigate(['/posts', postId]);
  }


}
