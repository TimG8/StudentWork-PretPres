import { Injectable } from '@angular/core';
import {User} from "../model/model.user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    private httpClient:HttpClient
  ) {
  }

  authenticate(mail, password) {
    let request = 'http://localhost:8080/user/login/'+mail+'/'+password;
    this.httpClient.get<User>(request)
      .subscribe((user : User) => {
        if(user !== null){
          this.setSessionItems(user);
        }else{
          alert("Le mail ou le mot de passe est incorrect ! ")
        }
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

  logOut() {
    sessionStorage.clear();
  }

  register(user : User){
    let request = 'http://localhost:8080/user/';
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
