// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, Observable, catchError } from 'rxjs';
import { User } from '../shared/models/user.dto';
import { environment } from '../../environments/environment';
import { LoadingService } from './loading.service';
import { ErrorHandlerService } from './error-handler.service'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.serverURL;

  constructor(
    private httpClient: HttpClient,
    private loadingService: LoadingService,
    private errorHandler: ErrorHandlerService 
  ) { }

  // Tüm kullanıcıları getirir
  getUsers(): Observable<User[]> {
    this.loadingService.show();
    return this.httpClient.get<User[]>(`${this.apiUrl}/users`).pipe(
      catchError(this.errorHandler.handleError.bind(this.errorHandler)), // Hata yönetimi eklendi
      finalize(() => this.loadingService.hide())
    );
  }

  // Belirtilen ID'ye sahip kullanıcıyı getirir
  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.apiUrl}/users/${id}`).pipe(
      catchError(this.errorHandler.handleError.bind(this.errorHandler)) // Hata yönetimi eklendi
    );
  }
}
