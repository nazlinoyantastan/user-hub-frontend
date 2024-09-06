import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  searchTerm: string = '';

  constructor(
    private router: Router,
    private searchService: SearchService) { }

  onSearch(): void {
    this.searchService.setSearchTerm(this.searchTerm); 
  }

  navigateToUsers(): void {
    this.router.navigate(['/users']);
  }

}
