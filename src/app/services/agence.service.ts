import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Agence } from '../models/Agence';



@Injectable({
  providedIn: 'root'
})
export class AgenceService {
  private apiUrl = 'http://localhost:8095/api/v1/agences';
  constructor(private http: HttpClient) {}

  getAllAgences(): Observable<Agence[]> {
    return this.http.get<Agence[]>(this.apiUrl)
      
  }

  getAgenceById(id: number): Observable<Agence> {
    return this.http.get<Agence>(this.apiUrl + '/' + id)
        
  }


}
