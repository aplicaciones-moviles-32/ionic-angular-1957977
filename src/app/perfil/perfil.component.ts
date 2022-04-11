import { Component, Input, OnInit } from '@angular/core';
import { getDatabase, onValue, ref, remove, set, update } from 'firebase/database';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() {   }

  ngOnInit(): void {
    const db = getDatabase();
    const auxuser = ref(db, 'user/');
    onValue(auxuser, (aux) => {
      this.user = aux.val();
    });
  }

  @Input() newdesc: string = ""; 
  editon = false;


;
  user: any =[];

    editbutton(): void {
        this.editon = true;
    };

    savedesc (): void {
      this.user.desc = this.newdesc;
      this.editon = false;
      this.newdesc="";
    }

    canceldesc(): void {
      this.editon = false;
      this.newdesc="";
    }



}
