import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Category } from '../model/model.category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = 'http://localhost:8080/categories';

  constructor(
    private httpClient: HttpClient
  ) { }

  getCategories() {
    return this.httpClient.get<Category[]>(this.baseUrl);
  }

  deleteCategory(id) {
    const request = this.baseUrl + '/delete';
    const param = new HttpParams().set('id', id);
    return this.httpClient.post<Category[]>(request, param);
  }

  addCategory(name) {
    const request = this.baseUrl + '/add';
    const param = new HttpParams().set('name', name);
    return this.httpClient.post<Category>(request, param);
  }

}
