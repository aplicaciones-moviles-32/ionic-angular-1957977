import { Component, Input, OnInit } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { getDatabase, onValue, ref, remove, set, update } from 'firebase/database';


@Component({
  selector: 'app-popovermenu',
  templateUrl: './popovermenu.component.html',
  styleUrls: ['./popovermenu.component.css'],
  template:'<app-popovermenu [not_modify]="not_modify" [id_modify]="id_modify"></app-popovermenu>'
})
export class PopovermenuComponent implements OnInit {

  constructor(private ruta: Router, public alert: AlertController) { }


  user: any = [];
  @Input() 
  not_modify: any= {};
  @Input()
  id_modify: any = {};
  @Input() newdesc: string= '';
  editando: boolean = false;  
  pic: any = {};
  newnumpost: number = 0
  ubicacion: string = "";

  ngOnInit(): void {
    console.log(this.not_modify);
    console.log(this.id_modify);

    const db = getDatabase();
    const auxuser = ref(db, 'user/');
    onValue(auxuser, (aux) => {
        this.user = aux.val();
        this.newnumpost = parseInt(this.user.numpost);
    });

    
  }


  eliminar(id: string){
    let database = getDatabase();
    remove(ref(database, 'user/publicaciones/'+id));

    this.newnumpost--;
    update(ref(database, 'user/'),{ //actualizando el usuario
      numpost: this.newnumpost.toString()
    });

    this.ruta.navigate[('perfil')];

  }


  editar(){
    this.editando=!this.editando;
  }

  guardar(){
    let db = getDatabase();

    let getpic = ref(db, 'user/publicaciones/'+this.id_modify);
    onValue(getpic, (aux) =>{
      this.pic = aux.val();
      this.pic = this.pic['imagen'];
      this.ubicacion = aux.val();
      this.ubicacion = this.ubicacion['location'];
      console.log(this.ubicacion);
    })
    

    
    update(ref(db, 'user/publicaciones/'+this.id_modify),{
      desc: this.newdesc,
      imagen: this.pic,
      id: this.id_modify,
      location: this.ubicacion
      });
    window.location.reload();
    this.editando=false;
  }


  reportar(){
    this.presentAlert('Reporte enviado con "éxito"','En Misstagram claramente nos "importa" los reportes que hagas de las publicaciones para así mejorar esta plataforma hecha con mucho');
  }


  async presentAlert(subtitle: string , mensaje: string) {
    const alert = await this.alert.create({
      cssClass: 'alert',
      header: 'Reporte',
      subHeader: subtitle,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

}
