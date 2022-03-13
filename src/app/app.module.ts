import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from './tabs/tabs.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { IonicModule } from '@ionic/angular';
import { PerfilComponent } from './perfil/perfil.component';
import { RoutesModule } from './routes.module';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { DetallepubComponent } from './detallepub/detallepub.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ImagenesComponent,
    PerfilComponent,
    PublicacionesComponent,
    TabsComponent,
    DetallepubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    RoutesModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RoutesModule]
})
export class AppModule { }
