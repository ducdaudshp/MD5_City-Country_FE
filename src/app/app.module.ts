import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityCreateComponent } from './city/city-create/city-create.component';
import { CityListComponent } from './city/city-list/city-list.component';
import { CityEditComponent } from './city/city-edit/city-edit.component';
import { CityDeleteComponent } from './city/city-delete/city-delete.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CityCreateComponent,
    CityListComponent,
    CityEditComponent,
    CityDeleteComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
