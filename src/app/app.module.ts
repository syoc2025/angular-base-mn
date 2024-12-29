import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario.component';
import { LibrosComponent } from './libros/libros.component';
import { LibroComponent } from './libro/libro.component';
import { InicioComponent } from './inicio.component';

import { LibrosService } from './services/libros.service';

@NgModule({
  declarations: [
    AppComponent, // Componente raíz
    UsuarioComponent,
    LibrosComponent,
    LibroComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule, // Módulo base para apps en navegadores
    FormsModule, // Para trabajar con formularios
    AppRoutingModule, // Configuración de rutas
  ],
  providers: [LibrosService], // Servicios disponibles en toda la app
  bootstrap: [AppComponent], // Componente de inicio
})
export class AppModule {}
