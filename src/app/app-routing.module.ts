import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { LibrosComponent } from './libros/libros.component';

const routes: Routes = [
  { path: '', component: InicioComponent }, // Ruta para Inicio
  { path: 'libros', component: LibrosComponent }, // Ruta para Libros Favoritos
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
