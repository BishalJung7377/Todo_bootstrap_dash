import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}
  // create task
  createTask(
    TaskName: string,
    ListName: string,
    Priority: string,
    Date: string
  ) {
    return this.http.post(
      `https://6153eda62473940017efaae5.mockapi.io/api/todo/NewTask`,
      {
        TaskName: TaskName,
        ListName: ListName,
        Priority: Priority,
        Date: Date,
      }
    );
  }
  ///displaytask
  showTask() {
    return this.http.get(
      `https://6153eda62473940017efaae5.mockapi.io/api/todo/NewTask`
    );
  }
}
