import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {City} from '../model/city';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<City[]> {
    return this.http.get<City[]>(`${API_URL}/cities`);
  }

  create(data): Observable<City> {
    return this.http.post<City>(`${API_URL}/cities`, data);
  }

  update(id, data): Observable<City> {
    return this.http.put<City>(`${API_URL}/cities/${id}`, data);
  }

  delete(id): Observable<City> {
    return this.http.delete<City>(`${API_URL}/cities/${id}`);
  }

  findById(id): Observable<City> {
    return this.http.get(`${API_URL}/cities/${id}`);
  }

}
