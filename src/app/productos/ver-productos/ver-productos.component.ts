
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import {MatDialog} from '@angular/material/dialog';;

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.component.html',
  styleUrls: ['./ver-productos.component.css']
})
export class VerProductosComponent implements OnInit {

    
  constructor(public dialog: MatDialog ) { }
 


  ngOnInit(): void {

    mapboxgl.accessToken =  environment.mapboxKey;
    const map = new mapboxgl.Map({
    container: 'mapa-mapbox', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-76.5482316678658, 3.1160964861376486], // LNG, LAT
    zoom: 9 // starting zoom
    
    });

    mapboxgl.accessToken =  environment.mapboxKey2;
    const mapbox = new mapboxgl.Map({
      container: 'mapa-mapbox2', // container ID
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-76.61672297207453, 3.2839054728245234], // LNG, LAT
      zoom: 9 // starting zoom
      
      });

      mapboxgl.accessToken =  environment.mapboxKey3;
      const mapa = new mapboxgl.Map({
        container: 'mapa-mapbox3', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-76.59764394772911, 3.2465508880956464], // LNG, LAT
        zoom: 9 // starting zoom
        
        });  
        mapboxgl.accessToken =  environment.mapboxKey4;
        const mapa4 = new mapboxgl.Map({
          container: 'mapa-mapbox4', // container ID
          // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
          style: 'mapbox://styles/mapbox/streets-v11', // style URL
          center: [-76.61526166247535, 3.2652524646757755], // LNG, LAT
          zoom: 9 // starting zoom
          
          });  
        
    
  }

}