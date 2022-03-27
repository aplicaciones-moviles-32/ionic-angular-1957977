import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallepubComponent } from './detallepub/detallepub.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {
    path: "perfil",
    component: PerfilComponent
  },
  {
    path: "imagenes",
    component: ImagenesComponent
  },
  {
    path: 'detallepub/:id',
    component: DetallepubComponent
  },
  {
    path: "nuevo",
    component: NuevoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
