import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';
import { PopovermenuComponent } from '../popovermenu/popovermenu.component';
import { getDatabase, onValue, ref, remove, set, update } from 'firebase/database';


@Component({
  selector: 'app-detallepub',
  templateUrl: './detallepub.component.html',
  styleUrls: ['./detallepub.component.css']
})


export class DetallepubComponent implements OnInit {
  

  constructor(private ruta: ActivatedRoute,private popover: PopoverController) { }

  ngOnInit(): void{
    this.db = getDatabase();
    this.gotoback = "/perfil";  

    //Obteniendo la foto de perfil del usuario si es un usuario propio
    const auxuser = ref(this.db, 'user/');
    onValue(auxuser, (aux) => {
        this.pfp = aux.val();
        this.pfp = this.pfp['imagen'];
        this.user_pfp = this.pfp;
    });

      //El condicional if siguiente sirve para básicamente evitar confusiones ya que todos los elementos de todos los arreglos tienen el mismo id de firebase
      if(this.from_pub_ajenas == 'true'){ //Básicamente, si hacemos click desde las publicaciones ajenas, entonces nos traemos del arreglo de presidentes,
        this.auxdetail = ref(this.db, 'presidentes/'+this.idruta);
        this.gotoback = "/imagenes" //Y nos vamos a imagenes cuando presionemos el botón de atrás
        this.pfp = "https://imgs.search.brave.com/dCzoEOLiMzdADO510Id2OKHfs9DNNWMG_IeamH7m1Zw/rs:fit:585:618:1/g:ce/aHR0cHM6Ly9jZG4u/ZWxkZWZvcm1hLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wMS8xMzIyMDM3/MDRfOTAzNzU3NTcz/Nzg3MTU3XzM1Nzky/ODkyMjgxNjA2MTI0/MTdfbi01ODV4NjE4/LmpwZw";
      }else {
        this.auxdetail = ref(this.db, 'user/publicaciones/'+this.idruta); //Pero si hacemos click desde las publicaciones propias, entonces nos la traemos de publicaciones
        this.gotoback = "/perfil"  //Y nos vamos a perfil cuando presionemos el botón de atrás
      }

      onValue(this.auxdetail, (aux) => {
        this.pubdetail = aux.val();
      }); 


  }



  isliked: boolean = false;
  like (i:any) {
    this.isliked = !this.isliked;

    if(this.isliked){
      document.getElementById("like_button")!.innerHTML = "<ion-icon name=\"heart-dislike\"  style=\"font-size: 20px;\"></ion-icon><p>Un-Dislike</p>";
    }else{
      document.getElementById("like_button")!.innerHTML = "<ion-icon name=\"heart-dislike-outline\"></ion-icon><p>Dislike</p>";
    }


    
  }

  comment_button: boolean = false;
  comment(){
    this.comment_button = !this.comment_button;
  }

  send(){
    document.getElementById("comments")!.innerHTML = "<ion-item><ion-avatar slot=\"start\"><img src=\"" + this.user_pfp + "\"/></ion-avatar><ion-label>" + this.newcomment + "</ion-label></ion-item>";
    this.newcomment = "";
    this.comment_button = false;

  }
  


  @Input() newcomment: string ="";
  pfp: string = "";
  user_pfp: string = "";
  auxdetail: any = {};
  db: any = {};
  gotoback: string = ""; //gotoback es la ruta a dirigirse cuando presionemos el botón de atrás en la vista detalle, por defecto es "perfil"
  pubdetail: any = {}
  idruta: string = this.ruta.snapshot.params['id'];
  from_pub_ajenas: string = this.ruta.snapshot.params['bool'];  //Booleano que nos va a decir desde donde hacemos click para ver pubdetail, si es desde las publicaciones ajenas, entonces será true.


  
}
