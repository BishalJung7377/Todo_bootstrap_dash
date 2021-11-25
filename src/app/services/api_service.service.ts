import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { userLogin, Users } from './user';

@Injectable({
  providedIn: 'root',
})
export class APIServiceService {
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private API_URL =
    'https://6153eda62473940017efaae5.mockapi.io/api/todo/signup';

  constructor(private http: HttpClient) {}
  // For auth gaurd
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  login(): Observable<Users[]> {
    return this.http.get<Users[]>(this.API_URL);
  }
}
