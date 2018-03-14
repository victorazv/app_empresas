import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroProvider } from '../../providers/registro/registro';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';
//CameraPosition, MarkerOptions, Marker

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  registros: any;
  map: GoogleMap;

  @ViewChild('mapCanvas') element;

  constructor(private registroProvider: RegistroProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.registros = this.registroProvider.getAll();
    this.loadMap();
  }

  loadMap() {

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('mapCanvas', mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        this.registros.subscribe(
          (data: any) => {
            
            for (let registro of data) {
              // Now you can use all methods safely.
              this.map.addMarker({
                title: 'Ionic',
                icon: 'blue',
                animation: 'DROP',
                position: {
                  lat: registro.latitude,
                  lng: registro.longitude
                }
              });
            }

          }
        )
      });
  }
}
/*
.then(marker => {
  marker.on(GoogleMapsEvent.MARKER_CLICK)
    .subscribe(() => {
      alert('clicked');
    });
});
*/