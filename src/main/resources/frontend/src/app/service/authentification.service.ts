import { Injectable } from '@angular/core';
import {User} from "../model/model.user";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {error} from "util";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  baseUrl = 'http://localhost:8080/user';



  constructor(
    private httpClient:HttpClient
  ) {
  }

  authenticate(mail, password) {
    let request = this.baseUrl+'/login';
    let params = new HttpParams()
      .set("mail", mail)
      .set("password", password);


    this.httpClient.post<User>(request,params)
      .subscribe((user : User) => {
        if(user !== null){
          this.setSessionItems(user);
        }else{
          alert("Le mail ou le mot de passe est incorrect ! ");
        }
      },
      (error : HttpErrorResponse) => {
        alert("Le mail ou le mot de passe est incorrect ! ");
    });
  }

  setSessionItems(user : User){
    sessionStorage.setItem("id",user.id);
    sessionStorage.setItem("name",user.name);
    sessionStorage.setItem("firstName",user.firstName);
    sessionStorage.setItem("mail",user.mail);
    sessionStorage.setItem("password",user.password);
    sessionStorage.setItem("phone",user.phoneNumber);
  }

  isLoggedIn() {
    let user = sessionStorage.getItem('id')
    return !(user === null)
  }

  logOut() {
    sessionStorage.clear();
  }

  register(user : User){
    let request = this.baseUrl+'/login';
    this.httpClient.post<User>(request,user)
      .subscribe((user : User) => {
        if(user !== null){
          this.setSessionItems(user);
        }else{
          alert("L'adresse mail est déjà utilisée !");
        }
    });
  }

}
