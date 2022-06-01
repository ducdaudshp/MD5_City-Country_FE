import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CityListComponent} from './city/city-list/city-list.component';
import {CityCreateComponent} from './city/city-create/city-create.component';
import {CityEditComponent} from './city/city-edit/city-edit.component';
import {CityDeleteComponent} from './city/city-delete/city-delete.component';


const routes: Routes = [
  {
    path: '',
    component: CityListComponent
  },
  {
    path: 'create',
    component: CityCreateComponent
  },
  {
    path: 'edit/:id',
    component: CityEditComponent
  },
  {
    path: 'delete/:id',
    component: CityDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
