import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UnifiedSearchService {
  private apiUrl = 'http://localhost:8095/api';

  constructor(private http: HttpClient) { }

  searchCustomers(searchParams: any): Observable<any> {
    const url = `${this.apiUrl}/customers`;
    return this.http.get<any>(url, { params: searchParams });
  }

  searchTools(searchParams: any): Observable<any> {
    const url = `${this.apiUrl}/tools`;
    return this.http.get<any>(url, { params: searchParams });
  }

  searchIncidents(searchParams: any): Observable<any> {
    const url = `${this.apiUrl}/incidents`;
    return this.http.get<any>(url, { params: searchParams });
  }
}


