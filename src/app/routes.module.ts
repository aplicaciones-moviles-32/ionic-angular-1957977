import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {
    path: "perfil",
    component: PerfilComponent
  },
  {
    path: "imagenes",
    component: ImagenesComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RoutesModule { }
