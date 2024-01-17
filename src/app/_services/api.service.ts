import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export default class ApiService {
  baseUrl = environment.backendUrl;

  constructor( private http: HttpClient) {}

  getFacts() {
    return this.http.get( this.baseUrl + 'facts')
  }

  getFact() {
    return this.http.get( this.baseUrl + 'fact')
  }

}
