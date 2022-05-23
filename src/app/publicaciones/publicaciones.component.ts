import { Component, NgModule, OnInit } from '@angular/core';
import { getDatabase, onValue, ref, remove, set, update } from 'firebase/database';



@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const db = getDatabase();
    const auxpub = ref(db, 'user/publicaciones');
    onValue(auxpub, (aux) => {
      this.publicaciones = aux.val();
      this.publicaciones = Object.values(this.publicaciones);
    });
  }



  publicaciones: any =[];

}


