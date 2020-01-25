import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Advertisement } from '../model/model.advertisement';
import { User } from '../model/model.user';
import { Category } from '../model/model.category';

@Injectable({
  providedIn: 'root'
})

export class AdvertisementService {

  private baseUrl: string;
  private title: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/advertisement';
  }

  public findByUserId(user: User): Observable<Advertisement[]> {
    const request = this.baseUrl + '/adsOfUser';

    const params = new HttpParams()
      .set('user_id', user.id);

    return this.http.post<Advertisement[]>(request, params);
  }

  public createAdvertisement(title: string, address: string, description: string, price: string, user: User, file: File, category: Category): Observable<Advertisement> {
    const request = this.baseUrl + '/create';

    const formData = new FormData();

    formData.append('title', title);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('address', address);
    formData.append('user_id', user.id);
    formData.append('picture', file);
    formData.append('category_id', category.id);

    return this.http.post<Advertisement>(request, formData);
  }

  public updateAdvertisement(ad: Advertisement): Observable<Advertisement> {
    const request = this.baseUrl + '/update';

    return this.http.put<Advertisement>(request, ad);
  }

  public setSearchTitle(title: string): void {
    this.title = title;
  }

  public searchByTitle(): Observable<Advertisement[]> {
    const request = this.baseUrl + '/searchByTitle';

    const params = new HttpParams().set('title', this.title);

    return this.http.post<Advertisement[]>(request, params);
  }

  public searchByTitleAndValidated(): Observable<Advertisement[]> {
    const request = this.baseUrl + '/searchByTitleAndValidated';

    const params = new HttpParams().set('title', this.title);

    return this.http.post<Advertisement[]>(request, params);
  }

  public findByUuid(uuid: string): Observable<Advertisement> {
    const request = this.baseUrl + '/searchByUuid';

    const params = new HttpParams().set('uuid', uuid);

    return this.http.post<Advertisement>(request, params);
  }

  public getAllAds(): Observable<Advertisement[]> {
    return this.http.get<Advertisement[]>(this.baseUrl);
  }

  public getValidatedAds(): Observable<Advertisement[]> {
    const request = this.baseUrl + '/validatedAdvertisements';

    return this.http.get<Advertisement[]>(request);
  }

  public deleteAd(uuid: string): Observable<Advertisement> {
    const request = this.baseUrl + '/delete';

    const param = new HttpParams().set('uuid', uuid);

    return this.http.put<Advertisement>(request, param);
  }

  public validateAd(uuid: string): Observable<Advertisement> {
    const request = this.baseUrl + '/validate';

    const param = new HttpParams().set('uuid', uuid);

    return this.http.put<Advertisement>(request, param);
  }

  public unvalidateAd(uuid: string): Observable<Advertisement> {
    const request = this.baseUrl + '/unvalidate';

    const param = new HttpParams().set('uuid', uuid);

    return this.http.put<Advertisement>(request, param);
  }
}
