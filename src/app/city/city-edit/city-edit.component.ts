import { Component, OnInit } from '@angular/core';
import {City} from '../model/city';
import {Country} from '../../country/model/country';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CityService} from '../service/city.service';
import {CountryService} from '../../country/service/country.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css']
})
export class CityEditComponent implements OnInit {
  city: City = {};
  id: number;
  countries: Country[] = [];
  cityForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    acreage: new FormControl(),
    population: new FormControl(),
    gdp: new FormControl(),
    description: new FormControl(),
    country: new FormControl(),
  });
  constructor(private cityService: CityService,
              private countryService: CountryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
       this.id = +paramMap.get('id');
       this.getCityById(this.id);
    });
  }

  ngOnInit() {
    this.getAllCountry();
  }

  getAllCountry() {
    this.countryService.getAll().subscribe((countries) => {
      this.countries = countries;
    });
  }

  get idControl() {
    return this.cityForm.get('id');
  }

  get nameControl() {
    return this.cityForm.get('name');
  }

  getCityById(id) {
    this.cityService.findById(id).subscribe((city) => {
      this.cityForm = new FormGroup({
        id: new FormControl(city.id),
        name: new FormControl(city.name, [Validators.required]),
        acreage: new FormControl(city.acreage),
        population: new FormControl(city.population),
        gdp: new FormControl(city.gdp),
        description: new FormControl(city.description),
        country: new FormControl(city.country.id),
      });
    });
  }

  updateCity() {
    if (this.cityForm.invalid) {
      return;
    } else {
      const data = this.cityForm.value;
      const countryId = data.country;
      data.country = {
        id: countryId
      };
      this.cityService.update(this.id, this.cityForm.value).subscribe(() => {
        alert("Sua thanh cong");
        this.router.navigateByUrl('/');
      });
    }
  }
}
