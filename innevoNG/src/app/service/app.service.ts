import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class AppService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {} 

  getMessage(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/test`); 
  }
}
