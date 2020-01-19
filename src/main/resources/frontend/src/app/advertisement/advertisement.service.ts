import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../model/model.user";
import {Advertisement} from "../model/model.advertisement";

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  private baseUrl : string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/advertisement';
  }

  public findByUuid(uuid : string) {
    let request = this.baseUrl + '/searchByUuid'

    let params = new HttpParams()
      .set("uuid", uuid);

    return this.http.post<Advertisement>(request, params);
  }
}
