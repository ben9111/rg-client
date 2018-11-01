import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DataService } from '../data.service';
import { Customer } from '.././data.service'

@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.css']
})
export class CityPageComponent implements OnInit {

  cityId: string
  customer: Customer[];

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(async (params: ParamMap) => {
      console.log('city id is: ', params.get('cityid'));
      this.cityId = params.get('cityid');
      this.customer = await this.dataService.getCityById(this.cityId);
    })
  }

}

