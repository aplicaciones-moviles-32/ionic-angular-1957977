import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DbservService } from '../dbserv.service';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.css']
})
export class HistoriasComponent implements OnInit {

  constructor(private http: HttpClient, private db: DbservService) { }

  ngOnInit(): void {
  }

  

}
