import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbservService } from '../dbserv.service';
import { PopoverController } from '@ionic/angular';
import { PopovermenuComponent } from '../popovermenu/popovermenu.component';

@Component({
  selector: 'app-detallepub',
  templateUrl: './detallepub.component.html',
  styleUrls: ['./detallepub.component.css']
})


export class DetallepubComponent implements OnInit {
  aux1: string = '';
  aux2: string = '';

  constructor(private ruta: ActivatedRoute, private http:HttpClient, private db:DbservService,private popover: PopoverController) { }

  ngOnInit(): void{

    this.db.getfeed().subscribe(res => {
      this.presidentes=res;
      this.aux2=this.presidentes.findIndex(x => x.id == this.idruta);
      this.db.getfeeddetail(this.aux2).subscribe(res => {this.pubdetail=res;})
    });

    this.db.getpub().subscribe(res => {
      this.publicaciones=res; 
      this.aux1=this.publicaciones.findIndex(y => y.id == this.idruta);
      this.db.getpubdetail(this.aux1).subscribe(res => {this.pubdetail=res;})
    });
  }


  presidentes: any =[];
  publicaciones: any =[];

  pubdetail: any = {}
  idruta: string = this.ruta.snapshot.params['id'];

  
}
