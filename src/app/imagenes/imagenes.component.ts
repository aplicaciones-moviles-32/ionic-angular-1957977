import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  constructor() { }
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



  ngOnInit(): void {
  }

  
}
