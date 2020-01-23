import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'

import { Advertisement } from '../model/model.advertisement';
import { User } from '../model/model.user';

@Injectable({
  providedIn: 'root'
})

export class AdvertisementService {

  private baseUrl : string;
  private title : string;

  constructor(private http : HttpClient) {
    this.baseUrl = 'http://localhost:8080/advertisement';
  }

  public findByUserId(user : User) : Observable<Advertisement[]> {
    let request = this.baseUrl + '/adsOfUser';

    let params = new HttpParams()
      .set("user_id", user.id);

    return this.http.post<Advertisement[]>(request, params);
  }

  public createAdvertisement(title : string, address : string, description : string, price : string, user : User, file : File) : Observable<Advertisement> {
    let request = this.baseUrl + '/create';

    const formData = new FormData();

    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("address", address);
    formData.append("user_id", user.id);
    formData.append("picture", file);

    return this.http.post<Advertisement>(request, formData);
  }

  public updateAdvertisement(ad : Advertisement) : Observable<Advertisement> {
    let request = this.baseUrl + '/update';

    return this.http.put<Advertisement>(request, ad);
  }

  public setSearchTitle(title : string) : void {
    this.title = title;
  }

  public searchByTitle() : Observable<Advertisement[]> {
    let request = this.baseUrl + '/searchByTitle';

    let params = new HttpParams().set("title", this.title);

    return this.http.post<Advertisement[]>(request, params);
  }

  public findByUuid(uuid : string) : Observable<Advertisement> {
    let request = this.baseUrl + '/searchByUuid'

    let params = new HttpParams()
      .set("uuid", uuid);

    return this.http.post<Advertisement>(request, params);
  }

  public getAllAds() : Observable<Advertisement[]> {
    return this.http.get<Advertisement[]>(this.baseUrl);
  }

  public getValidatedAds() : Observable<Advertisement[]> {
    let request = this.baseUrl + '/validatedAdvertisements';

    return this.http.get<Advertisement[]>(request);
  }

  public deleteAd(uuid : string) : Observable<Advertisement> {
    let request = this.baseUrl + '/delete';

    let param = new HttpParams().set("uuid", uuid);

    return this.http.put<Advertisement>(request, param);
  }

  public validateAd(uuid : string) : Observable<Advertisement> {
    let request = this.baseUrl + '/validate';

    let param = new HttpParams().set("uuid", uuid);

    return this.http.put<Advertisement>(request, param);
  }

  public unvalidateAd(uuid : string) : Observable<Advertisement> {
    let request = this.baseUrl + '/unvalidate';

    let param = new HttpParams().set("uuid", uuid);

    return this.http.put<Advertisement>(request, param);
  }
}
