import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../model/model.user";
import {Advertisement} from "../model/model.advertisement";

@Injectable({
  providedIn: 'root'
})
export class AllAdvertisementsService {
  baseUrl = 'http://localhost:8080/advertisement';

  constructor(
    private httpClient:HttpClient
  ) { }

  getAllAds(){
    return this.httpClient.get<Advertisement[]>(this.baseUrl);
  }

  getValidatedAds(){
    return this.httpClient.get<Advertisement[]>(this.baseUrl+"/validatedAdvertisements");
  }

  deleteAd(uuid){
    let param = new HttpParams()
      .set("uuid",uuid);
    return this.httpClient.post<Advertisement[]>(this.baseUrl+'/delete',param);
  }

  validateAd(uuid){
    let param = new HttpParams()
      .set("uuid",uuid);
    return this.httpClient.put<Advertisement[]>(this.baseUrl+'/validate',param);
  }
}
