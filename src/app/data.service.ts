import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCountires(): Promise<any> {
    return this.http.get('http://localhost:3000/countries')
      .toPromise()
      .then(data => Promise.resolve(data));
  }

  getCityById(cityId): Promise<any> {
    return this.http.get(`http://localhost:3000/city/${cityId}`)
      .toPromise()
      .then(city => Promise.resolve(city));
  }

}


export interface Customer {
  Id: string,
  Address: string,
  City: string,
  CompanyName: string,
  ContactName: string,
  ContactTitle: string,
  Country: string,
  Fax: string,
  Phone: string,
  PostalCode: string
}