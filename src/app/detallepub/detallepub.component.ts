import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallepub',
  templateUrl: './detallepub.component.html',
  styleUrls: ['./detallepub.component.css']
})


export class DetallepubComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void{
    this.obtenerpubdetalles(this.id);
    this.obtenerperdetalles(this.id);
  }




  publicaciones = [
    {
      "id": "0x346536a45b0",
      "desc": "La vida deberia ser eterna",
      "imagen": "assets/images/1.jpg"
    },
    {
      "id": "0x4456776a45b0",
      "desc": "beepbeep",
      "imagen": "assets/images/2.jpg"
    },
    {
      "id": "0x43rg766a45b0",
      "desc": "cringe",
      "imagen": "assets/images/3.jpg"
    },
    {
      "id": "0xh5j716a45b0",
      "desc": "Only I can change my life. No one can do it for me",
      "imagen": "assets/images/4.jpg"
    },
    {
      "id": "0x09f016a45b0",
      "desc": "Me gusta mi cabello",
      "imagen": "assets/images/5.jpg"
    },
    {
      "id": "0x44f5hfu3bb0",
      "desc": "Manden PM uwu",
      "imagen": "assets/images/6.jpg"
    },
    {
      "id": "0x44f0589ghr0",
      "desc": "MissinstaGOD // Instagramzzzzz",
      "imagen": "assets/images/7.jpg"
    },
    {
      "id": "0x29djfb5b5g0",
      "desc": "La vida deberia ser eterna",
      "imagen": "assets/images/1.jpg"
    },
    {
      "id": "0x44f02845hv0",
      "desc": "beepbeep",
      "imagen": "assets/images/2.jpg"
    },
    {
      "id": "0x44103rfjv5d0",
      "desc": "cringe",
      "imagen": "assets/images/3.jpg"
    },
    {
      "id": "0x44wk294jfb0",
      "desc": "Only I can change my life. No one can do it for me",
      "imagen": "assets/images/4.jpg"
    },
    {
      "id": "0x44f01f35dw0",
      "desc": "Me gusta mi cabello",
      "imagen": "assets/images/5.jpg"
    },
    {
      "id": "0x44f05869hgn",
      "desc": "Manden PM uwu",
      "imagen": "assets/images/6.jpg"
    },
    {
      "id": "0x44f29djnmmr0",
      "desc": "MissinstaGOD // Instagramzzzzz",
      "imagen": "assets/images/7.jpg"
    },
  ];


  presidentes = [
    {
      "nombre": "Porfirio Diaz",
      "id":"863586-zqkru",
      "foto": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.elsiglodetorreon.com.mx%2Fm%2Fi%2F2020%2F09%2F1346814.jpeg&f=1&nofb=1"
    },
    {
      "nombre": "Benito Juarez",
      "id":"344648-qniiu",
      "foto": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.europapress.es%2Ffotoweb%2Ffotonoticia_20160322181454_1920.jpg&f=1&nofb=1"
    },
    {
      "nombre": "Felipe Calderon",
      "id":"346391-mzfca",
      "foto": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.elsiglodetorreon.com.mx%2Fm%2Fi%2F2018%2F11%2F1117039.jpeg&f=1&nofb=1"
    },
    {
      "nombre": "AMLO",
      "id":"022325-zdvpi",
      "foto": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4208562.jpg&f=1&nofb=1"
    },
    {
      "nombre": "Enrique Peña Nieto",
      "id":"975506-herbe",
      "foto": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.biography.com%2F.image%2Ft_share%2FMTMzMTE4ODA5NjE0NTkyNjQz%2Fenrique-pena-nieto_wikicommonsjpg.jpg&f=1&nofb=1"
    },
    {
      "nombre": "Porfirio Diaz",
      "id":"584918-nutwz",
      "foto": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.elsiglodetorreon.com.mx%2Fm%2Fi%2F2020%2F09%2F1346814.jpeg&f=1&nofb=1"
    },
    {
      "nombre": "Benito Juarez",
      "id":"752405-cbzep",
      "foto": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.europapress.es%2Ffotoweb%2Ffotonoticia_20160322181454_1920.jpg&f=1&nofb=1"
    },
    {
      "nombre": "Felipe Calderon",
      "id":"763807-xbsxz",
      "foto": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.elsiglodetorreon.com.mx%2Fm%2Fi%2F2018%2F11%2F1117039.jpeg&f=1&nofb=1"
    },
    {
      "nombre": "AMLO",
      "id":"984260-cbsfd",
      "foto": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4208562.jpg&f=1&nofb=1"
    },
    {
      "nombre": "Enrique Peña Nieto",
      "id":"241286-cxvqh",
      "foto": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.biography.com%2F.image%2Ft_share%2FMTMzMTE4ODA5NjE0NTkyNjQz%2Fenrique-pena-nieto_wikicommonsjpg.jpg&f=1&nofb=1"
    }
  ];

  perdetail: any = {}
  pubdetail: any = {}
  id: string = this.ruta.snapshot.params['id'];
  obtenerpubdetalles(id: string): any {

    for(let i=0; i<this.publicaciones.length; i++){
      if(id==this.publicaciones[i].id){
        this.pubdetail=this.publicaciones[i];
      }
    }
    return this.pubdetail;
  }

  obtenerperdetalles(id: string): any {

    for(let i=0;i<this.presidentes.length;i++){
      if(id==this.presidentes[i].id){
        this.perdetail=this.presidentes[i];
      }
    }
    return this.perdetail;
  }
}
