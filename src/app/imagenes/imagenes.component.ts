import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DbservService } from '../dbserv.service';
import { PopoverController } from '@ionic/angular';
import { PopovermenuComponent } from '../popovermenu/popovermenu.component';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  constructor(private http: HttpClient, private db: DbservService, private popover: PopoverController) { }
  



  ngOnInit(): void {
    this.db.getfeed().subscribe(res => {this.presidentes=res;});
  }







  presidentes: any =[];
  
}
