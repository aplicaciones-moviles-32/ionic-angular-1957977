import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() {   }

  ngOnInit(): void {
  }

  @Input() newdesc: string = ""; 
  editon = false;


;
  user = 
    {
      "name":"Cringepedia",
      "desc":"Todo cringe, para personas cringe",
      "image":"assets/images/5.png", 
      "followers": "12345",
      "followings": "12",
      "numpost": "14"
    };

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
