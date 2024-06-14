import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agence } from '../models/Agence';
@Injectable({
  providedIn: 'root'
})
export class AgenceService {
  private apiUrl = 'http://localhost:8095/api/v1/agences';
  constructor(private http: HttpClient) { }
  // Obtenir toutes les agences

  getAllAgences(): Observable<Agence[]> {
    return this.http.get<Agence[]>(`${this.apiUrl}/all`);
  }
  
  getAgences(page: number = 0, size: number = 4): Observable<Agence[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<Agence[]>(`${this.apiUrl}/paginate`, { params });
  }

  // Obtenir une agence par son ID
  getAgenceById(id: number): Observable<Agence> {
    return this.http.get<Agence>(`${this.apiUrl}/${id}`);
  }
  // Créer une nouvelle agence
  createAgence(agence: Agence): Observable<Agence> {
    return this.http.post<Agence>(this.apiUrl, agence);
  }
  // Mettre à jour une agence
  updateAgence(id: number, agence: Agence): Observable<Agence> {
    return this.http.put<Agence>(`${this.apiUrl}/${id}`, agence);
  }
  // Supprimer une agence
  deleteAgence(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}