import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  show() {
    console.log('Loading spinner shown'); 
    this.loadingSubject.next(true);
  }

  hide() {
    console.log('Loading spinner hidden');
    this.loadingSubject.next(false);
  }
}
