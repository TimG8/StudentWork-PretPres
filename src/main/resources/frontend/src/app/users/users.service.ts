import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../model/model.user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://localhost:8080/user';

  constructor(
    private httpClient:HttpClient
  ) { }

  getUsers(){
    return this.httpClient.get<User[]>(this.url);
  }

  deleteUser(id){
    let param = new HttpParams()
      .set("id",id);
    return this.httpClient.post<User[]>(this.url+'/delete',param);
  }

}
