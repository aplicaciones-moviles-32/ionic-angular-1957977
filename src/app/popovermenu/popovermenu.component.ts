import { Component, Input, OnInit } from '@angular/core';
import { getDatabase, onValue, ref, remove, set, update } from 'firebase/database';


@Component({
  selector: 'app-popovermenu',
  templateUrl: './popovermenu.component.html',
  styleUrls: ['./popovermenu.component.css'],
  template:'<app-popovermenu [not_modify]="not_modify" [id_modify]="id_modify"></app-popovermenu>'
})
export class PopovermenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.not_modify);
    console.log(this.id_modify);
  }

  @Input() 
  not_modify: any= {};
  @Input()
  id_modify: any = {};
  @Input() newdesc: string= '';
  editando: boolean = false;  
  pic: any = {}; //eliminar pronto

  eliminar(id: string){
    let database = getDatabase();
    remove(ref(database, 'user/publicaciones/'+id));
    window.history.back();window.location.reload();
  }

  editar(){
    this.editando=!this.editando;
  }

  guardar(){
    let db = getDatabase();
    //eliminar pronto:
    let getpic = ref(db, 'user/publicaciones/'+this.id_modify);
    onValue(getpic, (aux) =>{
      this.pic = aux.val();
      this.pic = this.pic['imagen'];
    })
    //
    update(ref(db, 'user/publicaciones/'+this.id_modify),{
      desc: this.newdesc,
      imagen: this.pic,
      id: this.id_modify
      });
    window.location.reload();
    this.editando=false;
  }
}
