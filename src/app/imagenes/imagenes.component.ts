import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopovermenuComponent } from '../popovermenu/popovermenu.component';
import { getDatabase, onValue, ref, remove, set, update } from 'firebase/database';
import { identifierName } from '@angular/compiler';


@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  constructor(private popover: PopoverController) { }
  

  @Input() newcomment: string ="";
  user_pfp: string = "";


  ngOnInit(): void {
    const database = getDatabase();
    const db = getDatabase();
    const auxpresidentes = ref(database, 'presidentes/');

    onValue(auxpresidentes, (aux) => {
      this.presidentes = aux.val();
      this.presidentes = Object.values(this.presidentes);
    });

    //Obteniendo la foto de perfil del usuario si es un usuario propio
    const auxuser = ref(db, 'user/');
    onValue(auxuser, (aux) => {
        this.user_pfp = aux.val();
        this.user_pfp = this.user_pfp['imagen'];
    });

  }

  presidentes: any =[];

  card_validation(i:any): boolean{ //función que comprueba si un elemento del arreglo de personas está vacío o no, para evitar que se muestre.
    if (typeof i == 'undefined') return false;
    else return true;
  }

  isliked: boolean = false;
  like (i:any) {
    this.isliked = !this.isliked;

    if(this.isliked){
      document.getElementById("like_button_"+i.id)!.innerHTML = "<ion-icon name=\"heart-dislike\"  style=\"font-size: 20px;\"></ion-icon><p>Un-Dislike</p>";
    }else{
      document.getElementById("like_button_"+i.id)!.innerHTML = "<ion-icon name=\"heart-dislike-outline\"></ion-icon><p>Dislike</p>";
    }
    
  }

  comment_button: boolean = false;
  comment(){
    this.comment_button = !this.comment_button;
  }

  send(i:any){
    document.getElementById("comments_"+i.id)!.innerHTML = "<ion-item><ion-avatar slot=\"start\" ><img src=\"" + this.user_pfp + "\"/></ion-avatar><ion-label> " + this.newcomment + "</ion-label></ion-item>";
    this.newcomment = "";
    this.comment_button = false;

  }


  

  
}
