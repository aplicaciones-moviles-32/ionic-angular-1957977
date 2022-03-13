import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DetallepubComponent } from './detallepub/detallepub.component';

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
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }
