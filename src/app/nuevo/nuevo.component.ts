import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Database, set, ref, update, getDatabase, onValue, remove } from 'firebase/database';
import { PhotoServicioService } from '../photo-servicio.service';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor(public fotos: PhotoServicioService) {}

  ubicacion: string = "";
  user: any = [];
  foto_check: boolean = false;
  publicado: boolean = false;
  newid: string = '';
  newnumpost: number = 0;


  ngOnInit(): void {
    this.getUbicacion();
    const db = getDatabase();
    const auxuser = ref(db, '/user');
    onValue(auxuser, (aux) => {
        this.user = aux.val();
    });
  }


  Tomar_Foto(){
    console.log(this.ubicacion);
    this.publicado = true;
    this.fotos.tomar_foto();
    defineCustomElements(window);
    this.foto_check=true;
  }

  
  onSubmit(form: NgForm) {
    this.publicado = false;
    const db = getDatabase();
    this.newid = this.makeid(8); //Creando un nuevo id de publicación automático de 8 caracteres
    this.newnumpost = parseInt(this.user.numpost);

    

    set(ref(db, '/user/publicaciones/'+this.newid),{ //Creando una nueva publicación 
      desc: this.newdesc,
      imagen: this.fotos.foto[0].data,
      id: this.newid,
      location: this.ubicacion
    });


    this.newnumpost++;
    update(ref(db, 'user/'),{ //actualizando el usuario
      numpost: this.newnumpost.toString()
    });
    
    this.clear();
  }

  clear(): void{
    this.newdesc="";
    this.newid = '';
    this.foto_check = false;
  }

  @Input() newdesc: string ="";

   makeid(length: number) {                               //Función que genera cadenas aleatorias
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  getUbicacion = async () => {                           //Obtiene la ubicación
    try{
      const coordinates = await Geolocation.getCurrentPosition();

      let latitud =  this.truncateDecimals(parseFloat(coordinates.coords.latitude.toString()), 3);
      let longitud =  this.truncateDecimals(parseFloat(coordinates.coords.longitude.toString()), 3);
  
      this.ubicacion = "(" + latitud.toString() + "," + longitud.toString() + ")";
    }catch (error){
      this.ubicacion = "N/D";
    }

  };


  truncateDecimals = function (number, digits) {          //Redondea las coordenadas
    var multiplier = Math.pow(10, digits),
        adjustedNum = number * multiplier,
        truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

    return truncatedNum / multiplier;
};



}
