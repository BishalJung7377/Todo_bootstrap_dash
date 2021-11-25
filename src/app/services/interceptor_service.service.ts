import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { APIServiceService } from './api_service.service';
import { LoaderService } from './loader/loader.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorServiceService implements HttpInterceptor {
  constructor(
    public loaderService: APIServiceService,
    public itemLoaderService: LoaderService
  ) {}
  intercept(
    req: HttpRequest<string>,
    next: HttpHandler
  ): Observable<HttpEvent<string>> {
    this.loaderService.isLoading.next(true);
    this.itemLoaderService.isLoading.next(true);
    return next.handle(req).pipe(
      finalize(() => {
        this.loaderService.isLoading.next(false);
        this.itemLoaderService.isLoading.next(false);
      })
    );
  }
}
