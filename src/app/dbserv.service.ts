import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbservService {

  constructor(private http: HttpClient) { }


  getfeed(): any {
    return this.http.get('https://misstagram-a8c5e-default-rtdb.firebaseio.com/presidentes.json');
  }

  getprofile(): any{
    return this.http.get('https://misstagram-a8c5e-default-rtdb.firebaseio.com/user.json');
  }

  getpub(): any{
    return this.http.get('https://misstagram-a8c5e-default-rtdb.firebaseio.com/user/publicaciones.json');
  }

  getpubdetail(identifier: string): any{
    return this.http.get('https://misstagram-a8c5e-default-rtdb.firebaseio.com/user/publicaciones/'+identifier+'.json');
  }

  getfeeddetail(identifier: string): any{
    return this.http.get('https://misstagram-a8c5e-default-rtdb.firebaseio.com/presidentes/'+identifier+'.json');
  }
}
