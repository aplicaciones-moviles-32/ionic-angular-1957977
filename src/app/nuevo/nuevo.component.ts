import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Database, set, ref, update, getDatabase } from 'firebase/database';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  newid: string = '';
  
  onSubmit(form: NgForm) {
    const db = getDatabase();
    this.newid = this.makeid(8); //Creando un nuevo id de publicación automático de 8 caracteres
    set(ref(db, '/user/publicaciones/'+this.newid),{ //Creando una nueva publicación 
      desc: this.newdesc,
      imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F35%2F6d%2F29%2F356d29379ba4bae3843bcd124de3fe9f.jpg&f=1&nofb=1",
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
