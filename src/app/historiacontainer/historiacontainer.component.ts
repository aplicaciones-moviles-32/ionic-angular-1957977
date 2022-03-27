import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DbservService } from '../dbserv.service';

@Component({
  selector: 'app-historiacontainer',
  templateUrl: './historiacontainer.component.html',
  styleUrls: ['./historiacontainer.component.css']
})
export class HistoriacontainerComponent implements OnInit {

  constructor(private http: HttpClient, private db: DbservService) { }

  ngOnInit(): void {
    this.db.gethistoria().subscribe(res => {
      this.historias=res;
    });
  }


  historias: any = [];
}
