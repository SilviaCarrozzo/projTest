import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export default class ApiService {
  baseUrl = 'https://catfact.ninja/';

  constructor( private http: HttpClient) {}

  getFacts() {
    return this.http.get( this.baseUrl + 'facts')
  }

  lookupByI(idDrink: string) {
    return this.http.get( this.baseUrl + '/lookup.php?i=' + idDrink)
  }

  saveDrink(drink: any) {

  }

}
