import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user.dto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.serverURL;

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apiUrl}/users`);
    
  }

}
