// src/app/services/error-handler.service.ts
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Bilinmeyen bir hata oluştu!';

    if (error.error instanceof ErrorEvent) {
      
      errorMessage = `Bir hata oluştu: ${error.error.message}`;
    } else {
      
      errorMessage = `Sunucu hatası: ${error.status}\nMesaj: ${error.message}`;
    }

    
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
