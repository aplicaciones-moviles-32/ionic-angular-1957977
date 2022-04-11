import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopovermenuComponent } from '../popovermenu/popovermenu.component';
import { getDatabase, onValue, ref, remove, set, update } from 'firebase/database';


@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  constructor(private popover: PopoverController) { }
  



  ngOnInit(): void {
    const database = getDatabase();
    const auxpresidentes = ref(database, 'presidentes/');
    onValue(auxpresidentes, (aux) => {
      this.presidentes = aux.val();
      this.presidentes = Object.values(this.presidentes);
    });
  }

  presidentes: any =[];

  card_validation(i:any): boolean{ //función que comprueba si un elemento del arreglo de personas está vacío o no, para evitar que se muestre.
    if (typeof i == 'undefined') return false;
    else return true;
  }
  
}
