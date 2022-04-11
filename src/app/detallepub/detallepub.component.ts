import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
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

      //El condicional if siguiente sirve para básicamente evitar confusiones ya que todos los elementos de todos los arreglos tienen el mismo id de firebase
      if(this.from_pub_ajenas == 'true'){ //Básicamente, si hacemos click desde las publicaciones ajenas, entonces nos traemos del arreglo de presidentes,
        this.auxdetail = ref(this.db, 'presidentes/'+this.idruta);
      }else {
        this.auxdetail = ref(this.db, 'user/publicaciones/'+this.idruta); //Pero si hacemos click desde las publicaciones propias, entonces nos la traemos de publicaciones
      }

      onValue(this.auxdetail, (aux) => {
        this.pubdetail = aux.val();
      }); 

  }

  auxdetail: any = {};
  db: any = {};
  pubdetail: any = {}
  idruta: string = this.ruta.snapshot.params['id'];
  from_pub_ajenas: string = this.ruta.snapshot.params['bool'];  //Booleano que nos va a decir desde donde hacemos click para ver pubdetail, si es desde las publicaciones ajenas, entonces será true.


  
}
