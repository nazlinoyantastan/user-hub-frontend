// photo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl = environment.serverURL;

  constructor(private http: HttpClient) {}

  // Kullanıcının fotoğrafını getir
  getUserPhoto(userId: number): Observable<string> {
    // İlk olarak kullanıcının albümlerini alıyoruz
    return this.http.get<any[]>(`${this.apiUrl}/users/${userId}/albums`).pipe(
      // İlk albümün id'sini alıyoruz
      map(albums => albums[0]?.id),
      // Albüm id'sini kullanarak fotoğrafları alıyoruz
      switchMap(albumId => this.http.get<any[]>(`${this.apiUrl}/albums/${albumId}/photos`)),
      // İlk fotoğrafın URL'sini alıyoruz
      map(photos => photos[0]?.thumbnailUrl || 'path/to/default/image.jpg') // Hata durumunda default bir resim kullan
    );
  }
}
