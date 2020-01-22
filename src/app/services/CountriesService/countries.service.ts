import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private _htpClient:HttpClient) { }
  
  public getCountries():any{
    return this._htpClient.get('https://restcountries.eu/rest/v2/all');
  }
}
