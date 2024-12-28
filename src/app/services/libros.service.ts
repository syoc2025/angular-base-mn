export class LibrosService {
  private libros = ['Libro de Vaxi', 'Libro de Aritmetica', 'Autos autómos'];

  agregarLibro(libroNombre: string) {
    this.libros.push(libroNombre);
  }
  obtenerLibros() {
    return [...this.libros];
  }
}
