import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { getDatabase, ref, onValue, update } from 'firebase/database';
import { PhotoServicioService } from '../photo-servicio.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  constructor(private router: Router, public alert: AlertController,public fotos: PhotoServicioService) { }

  ngOnInit(): void {


    const db = getDatabase();
    const auxuser = ref(db, 'user/');
    onValue(auxuser, (aux) => {
        this.user = aux.val();
        this.usr_pass = this.user.pass;
        this.usr_name = this.user.name;
    });


    this.sesion_iniciada = false;
    this.inputpass = "";
    this.inputuser = "";
    
  }


  settings: boolean = false;
  user: any = [];
  sesion_iniciada: boolean = false;
  usr_pass : string = "";
  usr_name : string = "";
  @Input() inputuser: string = "";
  @Input() inputpass: string = "";
  @Input() old_pass: string = "";
  @Input() new_pass: string = "";
  @Input() new_rep_pass: string = "";
  @Input() new_name: string = "";
  editando_pass: boolean = false;
  editando_name: boolean = false;
  editando_pfp: boolean = false;
  foto_check: boolean = false;

  async presentAlert(subtitle: string , mensaje: string) {
    const alert = await this.alert.create({
      cssClass: 'alert',
      header: 'Error',
      subHeader: subtitle,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }


  trig_chngpass(){
    this.editando_pass = !this.editando_pass;
  }

  trig_settings(){
    this.settings = !this.settings;
  }

  trig_chngname(){
    this.editando_name = !this.editando_name;
  }

  trig_chngpfp(){
    this.editando_pfp = !this.editando_pfp;
  }

  close_button(){
    this.sesion_iniciada = false;
    this.router.navigate(['iniciosesion']);
  }

  chng_pass(){
    if(this.usr_pass==this.old_pass && this.new_pass == this.new_rep_pass && !(this.new_pass == "" || this.new_rep_pass == "")){

      const db = getDatabase();  
      update(ref(db, 'user/'),{
        pass: this.new_pass
      });

      this.old_pass= "";
      this.new_pass= "";
      this.new_rep_pass= "";
      this.settings=false;
      this.editando_pass = false;
      this.close_button();

    }else{
      this.presentAlert('Cambio de contraseña fallido','Checa si ingresaste bien tu antigua contraseña o si las contraseñas coincidan.');
    }
  }

  chng_name(){
    const db = getDatabase();  
    update(ref(db, 'user/'),{
      name: this.new_name
    });

    this.new_name= "";
    this.settings = false;
    this.editando_name = false;
  }

  tomar_foto(){
    this.fotos.tomar_foto();
    defineCustomElements(window);
    this.foto_check=true;
  }

  save_pfp(){
    const db = getDatabase();
    update(ref(db, 'user/'),{ 
      imagen: this.fotos.foto[0].data
    });
    this.settings= false;
    this.foto_check = false;
    this.editando_pfp = false;
  }


  onSubmit(form: NgForm){
    if(this.inputuser==this.usr_name &&this.inputpass==this.usr_pass){
        
        this.sesion_iniciada = true;
        console.log(this.sesion_iniciada);
        this.router.navigate(['imagenes']);
    }else{
      this.presentAlert('Inicio de sesión fallido','Checa si ingresaste bien tus usuario y contraseña, si se te olvidó, entonces llama');
    }
    this.inputpass = "";
    this.inputuser = "";
  }


}
