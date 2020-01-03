import { Injectable } from '@angular/core';
import {User} from "../model/model.user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  user : User

  constructor(
    private httpClient:HttpClient
  ) {
  }

  authenticate(mail, password) {
    let request = 'http://localhost:8080/user/login/'+mail+'/'+password;
    this.httpClient.get<User>(request)
      .subscribe((user : User) => {
        if(user == null){
          return false;
        }else{
          sessionStorage.setItem("id",user.id);
          sessionStorage.setItem("name",user.name);
          sessionStorage.setItem("firstName",user.firstName);
          sessionStorage.setItem("mail",user.mail);
          sessionStorage.setItem("password",user.password);
          sessionStorage.setItem("phone",user.phoneNumber);
          this.user = user;
        }
      });
    return true;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('id');
    return !(user === null);
  }

  logOut() {
    sessionStorage.clear();
  }

}
