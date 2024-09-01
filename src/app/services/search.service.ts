import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchTermSubject = new BehaviorSubject<string>(''); // Başlangıçta boş string
  searchTerm$ = this.searchTermSubject.asObservable(); // Observable olarak dışa aktarım

  setSearchTerm(term: string): void {
    this.searchTermSubject.next(term); // Yeni arama terimini yayar
  }
}
