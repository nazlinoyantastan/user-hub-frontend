import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { User } from '../shared/models/user.dto';
import { environment } from '../../environments/environment';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.serverURL;

  constructor(
    private httpClient: HttpClient,
    private loadingService: LoadingService
  ) { }

  // Tüm kullanıcıları getirir
getUsers(): Observable<User[]> {
  this.loadingService.show(); // Yüklenme göstergesini başlatır
  return this.httpClient.get<User[]>(`${this.apiUrl}/users`).pipe(
    finalize(() => this.loadingService.hide()) // İstek tamamlandığında veya hata oluştuğunda yüklenme göstergesini kapatır
  );
}


  // Belirtilen ID'ye sahip kullanıcıyı getirir
  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.apiUrl}/users/${id}`);
  }

}
