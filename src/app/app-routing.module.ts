import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ListadoPerfilesComponent } from './componentes/listado-perfiles/listado-perfiles.component';
import { PerfilDetalleComponent } from './paginas/perfil-detalle/perfil-detalle.component';


const routes: Routes = [
   { path: '', component: InicioComponent }
  // { path: '', component: ListadoPerfilesComponent}
  // { path: '', component: PerfilDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
