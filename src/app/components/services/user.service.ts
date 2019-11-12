import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlApi = environment.urlApi;
  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get(this.urlApi+ 'usuario/getall');
  }
}
