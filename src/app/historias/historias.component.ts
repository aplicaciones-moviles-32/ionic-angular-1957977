import { Component, OnInit } from '@angular/core';
import { getDatabase, onValue, ref, remove, set, update } from 'firebase/database';


@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.css']
})
export class HistoriasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

}
