import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountryListComponent } from './country-list/country-list.component';
import {HttpClientModule} from '@angular/common/http';

import {CountriesService} from '../app/services/CountriesService/countries.service';

@NgModule({
  //add all components here
  declarations: [
    AppComponent,
    CountryListComponent
  ],
  //add all modules here
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  //add all services here
  providers: [CountriesService],
  //add all te components that needs to be bootstrapped
  bootstrap: [AppComponent]
})
export class AppModule { }
