import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { Advertisement } from '../model/model.advertisement';
import { User } from '../model/model.user';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  private baseUrl : string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/advertisement';
  }

  public findByUserId(user : User) {
    let request = this.baseUrl + '/adsOfUser'

    let params = new HttpParams()
      .set("user_id", user.id);

    return this.http.post<Advertisement[]>(request, params);
  }

  public createAdvertisement(title : string, address : string, description : string, price : string, user : User, file : File) {
    let request = this.baseUrl + '/create'

    const formData = new FormData();

    formData.append("title", title)
    formData.append("price", price)
    formData.append("description", description)
    formData.append("address", address)
    formData.append("user_id", user.id)
    formData.append("picture", file);

    console.log('scope is ' + file);

    return this.http.post<Advertisement>(request, formData);
  }
}
