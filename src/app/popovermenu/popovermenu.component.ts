import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DbservService } from '../dbserv.service';

@Component({
  selector: 'app-popovermenu',
  templateUrl: './popovermenu.component.html',
  styleUrls: ['./popovermenu.component.css'],
  template:'<app-popovermenu [id_pub_edit]="id_pub_edit"></app-popovermenu>'
})
export class PopovermenuComponent implements OnInit {

  constructor(private http:HttpClient, private db: DbservService) { }

  ngOnInit(): void {
  }

  @Input() 
  id_pub_edit: string= '';
  @Input() newdesc: string= '';
  editando: boolean = false;
  newpub: any = {};
  

  eliminar(id: string){
    this.db.deletepub(id).subscribe(aux => {console.log(id);window.history.back();});
  }

  editar(){
    this.editando=!this.editando;
  }

  guardar(){
    this.db.getpubdetail(this.id_pub_edit).subscribe(arr => {
      this.newpub=arr;
      this.newpub['desc']=this.newdesc;
      this.db.putpub(this.id_pub_edit,this.newpub).subscribe(aux =>{window.location.reload();});
    });
    this.editando=false;
  }
}
