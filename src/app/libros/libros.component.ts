import { Component, NgModule } from '@angular/core';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent {

  libros = [];
  constructor(private librosService: LibrosService) {
    this.libros = librosService.obtenerLibros();
  }
  eliminarLibro(libro) {

  }
  guardarLibro(f) {
    if (f.valid) {
    }
  }
}
