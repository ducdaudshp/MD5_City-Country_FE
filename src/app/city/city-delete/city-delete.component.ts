import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CityService} from '../service/city.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-city-delete',
  templateUrl: './city-delete.component.html',
  styleUrls: ['./city-delete.component.css']
})
export class CityDeleteComponent implements OnInit {
  cityForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    acreage: new FormControl(),
    population: new FormControl(),
    gdp: new FormControl(),
    description: new FormControl(),
    country: new FormControl()
  });
  id: number;
  constructor(private cityService: CityService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.id = + paramMap.get('id');
      this.getCityById(this.id);
    });
  }

  ngOnInit() {
  }

  getCityById(id) {
    this.cityService.findById(id).subscribe((city) => {
      this.cityForm = new FormGroup({
        id: new FormControl(),
        name: new FormControl(city.name, [Validators.required]),
        acreage: new FormControl(city.acreage),
        population: new FormControl(city.population),
        gdp: new FormControl(city.gdp),
        description: new FormControl(city.description),
        country: new FormControl(city.country.name)
      });
    });
  }

  get idControl() {
    return this.cityForm.get('id');
  }

  get nameControl() {
    return this.cityForm.get('name');
  }

  delete(id) {
    this.cityService.delete(id).subscribe(() => {
      alert("Xoa thanh cong");
      this.router.navigateByUrl('/');
    });
  }
}
