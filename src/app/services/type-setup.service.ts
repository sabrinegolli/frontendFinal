import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SetupDisplayData } from '../models/SetupDisplayData';

@Injectable({
  providedIn: 'root'
})
export class TypeSetupService {

    private apiUrl='http://localhost:8095/api/v1/typeSetup';

    constructor(private http: HttpClient) {}
    
  getTypeSetup(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/alltype`);
  }


    // Récupérer un setup par ID
    getSetupById(id: number): Observable<SetupDisplayData> {
      return this.http.get<any>(`${this.apiUrl}/${id}`);
    }



    
    
  }
    
