import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { StorageService } from '../../modules/shop-module/services/storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const accessToken = this.storageService.getLocalItem('token');
    if (!accessToken) {
      return next.handle(request);
    }
    request = request.clone({
      headers: request.headers
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + accessToken),
    });

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);

        return throwError(() => new Error('Some error has occured'));
      })
    );
  }
}
