import { Component, OnInit } from '@angular/core';
import { getDatabase, onValue, ref, remove, set, update } from 'firebase/database';


@Component({
  selector: 'app-historiacontainer',
  templateUrl: './historiacontainer.component.html',
  styleUrls: ['./historiacontainer.component.css']
})
export class HistoriacontainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const db = getDatabase();
    const auxhiscontainer = ref(db, 'historias/');
    onValue(auxhiscontainer, (aux) => {
      this.historias = aux.val();
      this.historias = Object.values(this.historias);
    });
  }


  historias: any = [];
}
