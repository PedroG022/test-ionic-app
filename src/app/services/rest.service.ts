import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private httpClient: HttpClient) { }
  
  public getCars(): any {
    return this.httpClient.get('https://raw.githubusercontent.com/vega/vega/main/docs/data/cars.json')
  }
}