// photo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl = environment.serverURL;

  constructor(private http: HttpClient) { }


  getUserPhoto(userId: number): Observable<string> {

    return this.http.get<any[]>(`${this.apiUrl}/users/${userId}/albums`).pipe(
      map(albums => albums[0]?.id),
      switchMap(albumId => this.http.get<any[]>(`${this.apiUrl}/albums/${albumId}/photos`)),
      map(photos => photos[0]?.thumbnailUrl || '../../assets/userphoto.png'),
      catchError(error => {
        console.error('An error occurred:', error);        
        return of('../../assets/userphoto.png'); 
      })
    );
  }
}
