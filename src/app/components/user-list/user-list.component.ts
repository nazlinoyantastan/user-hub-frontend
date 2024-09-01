import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../shared/models/user.dto';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = []; 

  constructor(
    private userService: UserService,
    private router: Router,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.loadUsers(); 
     this.searchService.searchTerm$.subscribe((term) => {
      this.filterUsers(term);
    });


  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      this.filteredUsers = users;
    });
  }

  filterUsers(searchTerm = ''): void {
    if (searchTerm) {
      this.filteredUsers = this.users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredUsers = this.users;
    }
  }

  goToUserPosts(userId: number): void {
    this.router.navigate(['/users', userId, 'posts']);
  }


}


