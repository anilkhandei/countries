import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/CountriesService/countries.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  public data:any;
  constructor(private _service:CountriesService) { 
  }

  ngOnInit() {
    this.getCountries();
  }

  public getCountries():any{
    this._service.getCountries().subscribe(response=>{
      this.data=response;
    });
  }

}
