import { Component, OnInit } from '@angular/core';
import { AppService } from './service/app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'innevoNG';
  message: string = 'Cargando mensaje...';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.fetchMessage();
  }

  fetchMessage(): void {
    this.appService.getMessage().subscribe({
      next: (data) => (this.message = data),
      error: (err) => {
        console.error('Error al obtener el mensaje:', err);
        this.message = 'Error al cargar el mensaje.';
      },
    });
  }
}
