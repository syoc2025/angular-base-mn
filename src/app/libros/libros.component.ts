import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent {
  libros = ['El Quijote', 'La Odisea', 'La Caja de Pandora'];

  eliminarLibro(libro) {
    this.libros = this.libros.filter((p) => p !== libro);
  }
}
