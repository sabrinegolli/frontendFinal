import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SetupDisplayData } from '../models/SetupDisplayData';
import { NeedSetup } from '../models/NeedSetup';

@Injectable({ providedIn: 'root' })
export class SetupService {

    private apiUrl='http://localhost:8095/api/v1/nedd';

    constructor(private http: HttpClient) {}
    
  getSetups(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/withSetup`);
  }


  getTypeOutils(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8095/api/v1/setups/withSetup`);
    }
  
  

    // Récupérer un setup par ID
    getSetupById(id: number): Observable<SetupDisplayData> {
      return this.http.get<SetupDisplayData>(`${this.apiUrl}/${id}`);
    }
    // Ajouter un nouveau setup
    addSetup(setup: SetupDisplayData): Observable<SetupDisplayData> {
      return this.http.post<SetupDisplayData>(this.apiUrl, setup);
    }
    // Mettre à jour un setup existant
    updateSetup(setup: SetupDisplayData): Observable<SetupDisplayData> {
      return this.http.put<SetupDisplayData>(`${this.apiUrl}/${setup.id}`, setup);
      
    }
    // Supprimer un setup
    deleteSetup(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
    
  }
    
