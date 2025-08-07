import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUser, User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}

  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5285/api/Users';

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(id: number):Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  addUser(user: NewUser): Observable<User>{
    return this.http.post<User>(this.apiUrl, user);
  }

  deleteUser(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
  
  updateUser(id: number, user: User): Observable<void>{
    return this.http.put<void>(`${this.apiUrl}/${id}`, user);
  }

}
