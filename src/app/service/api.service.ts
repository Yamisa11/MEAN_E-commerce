import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "http://localhost:8080/api/products"

  constructor( private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl)
  
  }
}
