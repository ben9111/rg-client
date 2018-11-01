import { Component, OnInit, ViewChild, NgZone, AfterViewInit, Input } from '@angular/core';
import { AgmMap, GoogleMapsAPIWrapper, MapsAPILoader } from '@agm/core';
import { GoogleService } from '../google.service';
import { Customer } from '../data.service';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent implements OnInit {

  @ViewChild(AgmMap) map: AgmMap;
  @Input() customer: Customer;

  geocoder: any;

  lat: number = 51.678418;
  lng: number = 7.809007;

  location: Location = {
    lat: 51.678418,
    lng: 7.809007,
    marker: {
      lat: 51.678418,
      lng: 7.809007,
      draggable: true
    },
    zoom: 5
  };

  constructor(public mapsApiLoader: MapsAPILoader, private googleService: GoogleService) {
    this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
    })
  }

  ngOnInit() {
    this.location.marker.draggable = true;
    this.googleService.getCodeByAdress(this.customer.Address, this.customer.Country)
      .then(d => {
        this.location.lat = d.lat;
        this.location.lng = d.lng;
        this.location.marker.lat = d.lat;
        this.location.marker.lng = d.lng;
      })
  }

}

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

interface Location {
  lat: number;
  lng: number;
  viewport?: Object;
  zoom: number;
  address_level_1?: string;
  address_level_2?: string;
  address_country?: string;
  address_zip?: string;
  address_state?: string;
  marker?: Marker;
}

