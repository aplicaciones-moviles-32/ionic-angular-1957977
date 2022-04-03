import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DbservService } from '../dbserv.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor(private db: DbservService, private http: HttpClient) { }

  ngOnInit(): void {
  }



  onSubmit(form: NgForm) {
    var newpub = 
      {
        "desc": this.newdesc,
        "imagen": "assets/images/pic.png",
        "id": '0x_id_temporal'
      };
    this.db.postpub(newpub).subscribe();
    this.clear();
  }

  clear(): void{
    this.newdesc="";
  }

  @Input() newdesc: string ="";

  

}
