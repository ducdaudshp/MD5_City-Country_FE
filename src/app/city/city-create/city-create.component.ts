import { Component, OnInit } from '@angular/core';
import {City} from '../model/city';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CityService} from '../service/city.service';
import {CountryService} from '../../country/service/country.service';
import {Router} from '@angular/router';
import {Country} from '../../country/model/country';

@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.css']
})
export class CityCreateComponent implements OnInit {
  city: City = {};
  countries: Country[] = [];
  cityForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    acreage: new FormControl(),
    population: new FormControl(),
    gdp: new FormControl(),
    description: new FormControl(),
    country: new FormControl(),
  });
  constructor(private cityService: CityService,
              private countryService: CountryService,
              private router: Router) { }

  ngOnInit() {
    this.getAllCountry();
  }

  getAllCountry() {
    this.countryService.getAll().subscribe((countries) => {
      this.countries = countries;
    });
  }

  get nameControl() {
    return this.cityForm.get('name');
  }

  createCityUsingReactiveForm() {
    const data = this.cityForm.value;
    const countryId = data.country;
    data.country = {
      id: countryId
    };
    this.cityService.create(data).subscribe(() => {
      this.cityForm.reset();
      this.router.navigateByUrl('/');
    });
  }
}
