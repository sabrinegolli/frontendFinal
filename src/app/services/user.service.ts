import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UserDto } from '../models/UserDto';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8095/api/v1/users'; 

  public user!: UserDto;

  constructor(private http: HttpClient) { 

    
  }
  getUsers(page: number = 0, size: number = 4): Observable<User[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<User[]>(`${this.baseUrl}/paginate`, { params });
  }




  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`, { withCredentials: true });
  }
  getCurrentUser(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/current-user`, { withCredentials: true });
  }
  private getAccessToken(): string | null {
    return sessionStorage.getItem('access_token') || sessionStorage.getItem('access_token') || null;
  }
  changePassword(userId: number, changePasswordRequest: { newPassword: string; confirmPassword: string }): Observable<any> {
  
    return this.http.post(`${this.baseUrl}/change-password/${userId}`, changePasswordRequest, { withCredentials: true });
  }


  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${userId}`, { withCredentials: true });
  }
}