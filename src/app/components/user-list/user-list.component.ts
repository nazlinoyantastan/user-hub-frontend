import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../shared/models/user.dto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
  users: User[] = [];
  
  
  
  constructor(
    private userService: UserService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users; 
    });
  }

  goToUserPosts(userId: number): void {
    
    this.router.navigate(['/users', userId, 'posts']);
  }

  
}


