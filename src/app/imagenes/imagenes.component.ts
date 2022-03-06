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
      "foto": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.elsiglodetorreon.com.mx%2Fm%2Fi%2F2020%2F09%2F1346814.jpeg&f=1&nofb=1"
    },
    {
      "nombre": "Benito Juarez",
      "foto": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.europapress.es%2Ffotoweb%2Ffotonoticia_20160322181454_1920.jpg&f=1&nofb=1"
    },
    {
      "nombre": "Felipe Calderon",
      "foto": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.elsiglodetorreon.com.mx%2Fm%2Fi%2F2018%2F11%2F1117039.jpeg&f=1&nofb=1"
    },
    {
      "nombre": "AMLO",
      "foto": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4208562.jpg&f=1&nofb=1"
    },
    {
      "nombre": "Enrique Peña Nieto",
      "foto": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.biography.com%2F.image%2Ft_share%2FMTMzMTE4ODA5NjE0NTkyNjQz%2Fenrique-pena-nieto_wikicommonsjpg.jpg&f=1&nofb=1"
    },
    {
      "nombre": "Porfirio Diaz",
      "foto": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.elsiglodetorreon.com.mx%2Fm%2Fi%2F2020%2F09%2F1346814.jpeg&f=1&nofb=1"
    },
    {
      "nombre": "Benito Juarez",
      "foto": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.europapress.es%2Ffotoweb%2Ffotonoticia_20160322181454_1920.jpg&f=1&nofb=1"
    },
    {
      "nombre": "Felipe Calderon",
      "foto": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.elsiglodetorreon.com.mx%2Fm%2Fi%2F2018%2F11%2F1117039.jpeg&f=1&nofb=1"
    },
    {
      "nombre": "AMLO",
      "foto": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4208562.jpg&f=1&nofb=1"
    },
    {
      "nombre": "Enrique Peña Nieto",
      "foto": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.biography.com%2F.image%2Ft_share%2FMTMzMTE4ODA5NjE0NTkyNjQz%2Fenrique-pena-nieto_wikicommonsjpg.jpg&f=1&nofb=1"
    }
  ];



  ngOnInit(): void {
  }

  
}
