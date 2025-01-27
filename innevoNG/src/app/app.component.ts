import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Mensaje del Backend</h1>
      <p>{{ mensaje }}</p>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  mensaje: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerMensaje();
  }

  obtenerMensaje(): void {
    this.http.get<string>('http://localhost:3000/test', { responseType: 'text' as 'json' })
      .subscribe(
        (respuesta) => {
          this.mensaje = respuesta;
        },
        (error) => {
          console.error('Error al obtener el mensaje:', error);
          this.mensaje = 'No se pudo obtener el mensaje del backend.';
        }
      );
  }
}
