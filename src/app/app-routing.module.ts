import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetallepubComponent } from './detallepub/detallepub.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
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
    path: 'detallepub/:bool/:id',
    component: DetallepubComponent
  },
  {
    path: "nuevo",
    component: NuevoComponent
  },
  {
    path: "iniciosesion",
    component: InicioSesionComponent
  },
  {
    path: '',
    component: InicioSesionComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
