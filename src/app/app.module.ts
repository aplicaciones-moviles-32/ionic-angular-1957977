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
import { environment} from 'src/environments/environment';
import { PopovermenuComponent } from './popovermenu/popovermenu.component';
import { HistoriasComponent } from './historias/historias.component';
import { HistoriacontainerComponent } from './historiacontainer/historiacontainer.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import {provideDatabase, getDatabase} from '@angular/fire/database';
import { initializeApp } from 'firebase/app';
import { provideFirebaseApp } from '@angular/fire/app';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ImagenesComponent,
    PerfilComponent,
    PublicacionesComponent,
    TabsComponent,
    DetallepubComponent,
    PopovermenuComponent,
    HistoriasComponent,
    HistoriacontainerComponent,
    NuevoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    RoutesModule,
    HttpClientModule,
    RouterModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideDatabase(()=>getDatabase())],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RoutesModule]
})
export class AppModule { }
