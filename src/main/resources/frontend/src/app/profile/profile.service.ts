import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {User} from "../model/model.user";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = 'http://localhost:8080/user';

  constructor(
    private httpClient:HttpClient
  ) { }

  updateMail(user : User){
    let request = this.baseUrl+'/update';

    this.httpClient.put<User>(request,user)
      .subscribe((user1 : User) => {
          if(user !== null){
            sessionStorage.setItem("mail",user1.mail);
          }else{
            alert("Le mail existe déjà ! ");
          }
        },
        (error : HttpErrorResponse) => {
          alert("Le mail existe déjà !");
        });
  }

  updatePassword(user : User){
    let request = this.baseUrl+'/update';

    this.httpClient.put<User>(request,user)
      .subscribe((user1 : User) => {
          if(user !== null){
            sessionStorage.setItem("password",user1.password);
          }else{
            alert("Erreur dans le changement de mot de passe !");
          }
        },
        (error : HttpErrorResponse) => {
          alert("Erreur dans le changement de mot de passe !");
        });
  }

  updateName(id, name){
    let request = this.baseUrl+'/updateName';
    let params = new HttpParams()
      .set("id", id)
      .set("name", name);

    console.log(request + " ", params);

    this.httpClient.post<User>(request,params)
      .subscribe((user : User) => {
          if(user !== null){
            sessionStorage.setItem("name",user.name);
          }else{
            alert("Erreur dans le changement de nom !");
          }
        },
        (error : HttpErrorResponse) => {
          console.log(error);
          alert("Erreur dans le changement de nom !");
        });
  }

  updateFirstName(user : User){
    let request = this.baseUrl+'/update';

    this.httpClient.put<User>(request,user)
      .subscribe((user1 : User) => {
          if(user !== null){
            sessionStorage.setItem("name",user1.firstName);
          }else{
            alert("Erreur dans le changement de prénom !");
          }
        },
        (error : HttpErrorResponse) => {
          alert("Erreur dans le changement de prénom !");
        });
  }
}
