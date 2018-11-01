import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  countries: [];

  constructor(private dataService: DataService) { }


  ngOnInit() {
    this.dataService.getCountires()
      .then(d => this.countries = d);
  }

}
