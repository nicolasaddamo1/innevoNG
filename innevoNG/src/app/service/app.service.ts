import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // El servicio estará disponible en toda la aplicación
})
export class AppService {
  private apiUrl = 'http://192.168.1.90:3000'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) {}

  getMessage(): Observable<string> {
    return this.http.get(this.apiUrl, { responseType: 'text' }); // Especificamos que queremos texto
  }
}
