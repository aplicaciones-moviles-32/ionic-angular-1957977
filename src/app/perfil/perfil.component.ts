import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DbservService } from '../dbserv.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private http:HttpClient, private db:DbservService) {   }

  ngOnInit(): void {
    this.db.getprofile().subscribe(res => {this.user=res;});
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
