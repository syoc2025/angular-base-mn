import { Subject } from 'rxjs';

export class LibrosService {
  librosSubject = new Subject();
  private libros = ['Libro de Vaxi', 'Libro de Aritmetica', 'Autos autómos'];

  agregarLibro(libroNombre: string) {
    this.libros.push(libroNombre);
    this.librosSubject.next();
  }
  eliminarLibro(libroNombre: string) {
    this.libros = this.libros.filter((x) => x !== libroNombre);
    this.librosSubject.next();
  }
  obtenerLibros() {
    return [...this.libros];
  }
}
