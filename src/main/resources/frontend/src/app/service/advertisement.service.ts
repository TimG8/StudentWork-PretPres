import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

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

  public createAdvertisement(title : string, address : string, description : string, price : string, user : User) {
    let request = this.baseUrl + '/create'

    let params = new HttpParams()
      .set("title", title)
      .set("price", price)
      .set("description", description)
      .set("address", address)
      .set("user_id", user.id);

    return this.http.post<Advertisement>(request, params);
  }
}
