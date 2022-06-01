import { Component, OnInit } from '@angular/core';
import {City} from '../model/city';
import {CityService} from '../service/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  cities: City[] = [];
  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.getAllCity();
  }

  getAllCity() {
    this.cityService.getAll().subscribe((data) => {
      this.cities = data;
    }, (error) => {
      });
  }
}
