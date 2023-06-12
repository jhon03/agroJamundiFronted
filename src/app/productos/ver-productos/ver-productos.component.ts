
import { Component, Inject, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductoService } from 'src/app/Services/producto.service';
import { ProductoDTO } from 'src/app/Models/Producto';
import { Pedido } from 'src/app/Models/Pedido';
import swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { title } from 'process';
import { PedidoService } from 'src/app/Services/pedido.service';
import { ActivatedRoute, Router } from '@angular/router';
import {NgIf} from '@angular/common';
import { MatFormField } from '@angular/material/form-field';

declare var ol: any;

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.component.html',
  styleUrls: ['./ver-productos.component.css'],


})
export class VerProductosComponent {
  [x: string]: any;

 //dialog
 animal: string;
 name: string;
 
  public productos: ProductoDTO[] = [];
  public pedido: Pedido = new Pedido();
  
  public producto: String[] = ['A', 'A', 'A', 'A', 'B', 'B'];
  constructor(public dialog: MatDialog, private productoService: ProductoService,
    private pedidoService: PedidoService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }


  mapbox: mapboxgl.Map;

  
  ngOnInit(): void {
    
    
    mapboxgl.accessToken = environment.mapboxKey2;
    const mapbox = new mapboxgl.Map({
      container: 'mapa-mapbox2', // container ID
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: 'mapbox://styles/mapbox/light-v11', // style URL
      center: [ -76.7893875, 3.2015276], // LNG, LAT
      zoom: 15.5, // starting zoom
    
      pitch: 45,
      bearing: -17.6,
      antialias: true

      

    });

    const geojson ={

      type: 'FeatureCollection',
      features:[
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-76.55804865244897, 3.128636904253779]
          },
          properties:{
            title: 'Mapbox',
            description: 'Quinamayo'
          }
        }
      ]
    }

    for (const feature of geojson.features) {
      // create a HTML element for each feature
      const el = document.createElement('div');
      el.className = 'marker';
    
      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(mapbox);

      new mapboxgl.Marker(el)
      .setLngLat(feature.geometry.coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25})
        .setHTML(
          `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
        )
      )
      .addTo(mapbox);
    }
    
  
   const coordinates = document.getElementById('coordinates');

    const marker = new mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([-76.55804865244897, 3.128636904253779])
      .addTo(mapbox);
      
      
      function onDragEnd() {
      const lngLat = marker.getLngLat();

      coordinates.style.display = 'block';
      coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
      }
       
      marker.on('dragend', onDragEnd);


   const coordinates2 = document.getElementById('coordinates');

    const marker2 = new mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([-76.39109021303577, 3.1359802939410346])
      .addTo(mapbox);
      
      
      function onDragEndd() {
      const lngLat = marker.getLngLat();

      coordinates.style.display = 'block';
      coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
      }
       
      marker.on('dragend', onDragEndd);

    mapbox.on('style.load', () => {
      // Insert the layer beneath any symbol layer.
      const layers = mapbox.getStyle().layers;
      const labelLayerId = layers.find(
      (layer) => layer.type === 'symbol' && layer.layout['text-field']
      ).id;

      mapbox.addLayer(
        {
        'id': 'add-3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 5,
        'paint': {
        'fill-extrusion-color': '#aaa',
         
        // Use an 'interpolate' expression to
        // add a smooth transition effect to
        // the buildings as the user zooms in.
        'fill-extrusion-height': [
        'interpolate',
        ['linear'],
        ['zoom'],
        15,
        0,
        15.05,
        ['get', 'height']
        ],
        'fill-extrusion-base': [
        'interpolate',
        ['linear'],
        ['zoom'],
        15,
        0,
        15.05,
        ['get', 'min_height']
        ],
        'fill-extrusion-opacity': 0.6
        }
        },
        labelLayerId
        );

        
      });

    

    
    mapboxgl.accessToken = environment.mapboxKey;
    const map = new mapboxgl.Map({
      container: 'mapa-mapbox', // container ID
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-76.7893875, 3.2015276], // LNG, LAT
      zoom: 9 // starting zoom

    });

    

    mapboxgl.accessToken = environment.mapboxKey3;
    const mapa = new mapboxgl.Map({
      container: 'mapa-mapbox3', // container ID
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-76.59764394772911, 3.2465508880956464], // LNG, LAT
      zoom: 9 // starting zoom

    });
    mapboxgl.accessToken = environment.mapboxKey4;
    const mapa4 = new mapboxgl.Map({
      container: 'mapa-mapbox4', // container ID
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-76.61526166247535, 3.2652524646757755], // LNG, LAT
      zoom: 9 // starting zoom

    });


  }
   
  

  // mapa renderizado
  initMap(): void {
    const view = new ol.View({
      center: ol.proj.fromLonLat([-76.54086545138439, 3.2615291362455276]), // Coordenadas iniciales del mapa
      zoom: 10 // Nivel de zoom inicial
    });

    const map = new ol.Map({
      target: 'map', // ID del elemento HTML donde se renderizará el mapa
      view: view,
      controls: ol.control.defaults()
    });


    const osmLayer = new ol.layer.TileLayer();
    source: new ol.source.OSM()
    
    map.addLayer(osmLayer);
  }



}