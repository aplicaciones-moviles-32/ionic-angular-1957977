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
import { AngularFireModule} from '@angular/fire/compat';
import { HttpClientModule } from '@angular/common/http';
import { PopovermenuComponent } from './popovermenu/popovermenu.component';
import { HistoriasComponent } from './historias/historias.component';
import { HistoriacontainerComponent } from './historiacontainer/historiacontainer.component';
import { NuevoComponent } from './nuevo/nuevo.component';


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
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RoutesModule]
})
export class AppModule { }
