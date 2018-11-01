import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(private http: HttpClient) { }

  getCodeByAdress(address, country): Promise<any> {
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAysfnp-0MVWL68jcu8Vi8jF15W2YmHsf8&components=country:${country}`)
      .toPromise()
      .then((d: any) => {
        var location = d.results[0].geometry.location;
        return Promise.resolve(location);
      })
  }
}
