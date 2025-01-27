import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importar módulo HTTP
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule], // Agregar HttpClientModule aquí
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
