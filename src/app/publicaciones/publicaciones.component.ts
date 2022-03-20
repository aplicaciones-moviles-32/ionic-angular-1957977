import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { DbservService } from '../dbserv.service';


@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  constructor(private http:HttpClient, private db:DbservService) { }

  ngOnInit(): void {
    this.db.getpub().subscribe(res => {this.publicaciones=res;});
  }



  publicaciones: any =[];

}


