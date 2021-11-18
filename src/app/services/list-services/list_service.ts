import { map } from 'rxjs/operators';
import { HttpRequest, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { list } from '../user';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private http: HttpClient) {}
  // Creating List
  createList(ListName: string) {
    return this.http.post(
      `https://6153eda62473940017efaae5.mockapi.io/api/todo/NewList`,
      {
        ListName: ListName,
      }
    );
  }
  // display list  task
  displayList() {
    return this.http.get(
      `https://6153eda62473940017efaae5.mockapi.io/api/todo/NewList`
    );
  }
}
