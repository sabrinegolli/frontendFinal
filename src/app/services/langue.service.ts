import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Langue } from '../models/Langue';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangueService {
 
    private apiUrl = 'http://localhost:8095/api/v1/langues';
    constructor(private http: HttpClient) {}
  
    getAllLangue(): Observable<Langue[]> {
      return this.http.get<Langue[]>(this.apiUrl)
        
    }
  
    getLangueById(id: number): Observable<Langue> {
      return this.http.get<Langue>(this.apiUrl + '/' + id)
          
    }
  
  
  }
  