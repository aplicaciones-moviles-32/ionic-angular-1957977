import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Database, set, ref, update, getDatabase } from 'firebase/database';
import { PhotoServicioService } from '../photo-servicio.service';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { Directory, WriteFileResult } from '@capacitor/filesystem';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor(public fotos: PhotoServicioService) { }

  ngOnInit(): void {
  }


  Tomar_Foto(){
    this.fotos.tomar_foto();
    defineCustomElements(window);
  }

  
  newid: string = '';
  
  onSubmit(form: NgForm) {
    const db = getDatabase();
    this.newid = this.makeid(8); //Creando un nuevo id de publicación automático de 8 caracteres
    set(ref(db, '/user/publicaciones/'+this.newid),{ //Creando una nueva publicación 
      desc: this.newdesc,
      imagen: this.fotos.foto[0].webviewPath,
      id: this.newid
    });
    this.clear();
  }

  clear(): void{
    this.newdesc="";
    this.newid = '';
  }

  @Input() newdesc: string ="";

   makeid(length: number) {     //Función que genera cadenas aleatorias
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
