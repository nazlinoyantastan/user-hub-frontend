import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchTermSubject = new BehaviorSubject<string>('');
  searchTerm$ = this.searchTermSubject.asObservable();

  //yeni arama terimini ayarlar ve abone olan tüm bileşenleri bilgilendirir
  setSearchTerm(term: string): void {
    this.searchTermSubject.next(term);
  }
}
