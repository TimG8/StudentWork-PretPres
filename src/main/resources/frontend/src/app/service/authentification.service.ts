import { Injectable } from '@angular/core';
import { User } from '../model/model.user';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {
  baseUrl = 'http://localhost:8080/user';

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  authenticate(mail, password) {
    const request = this.baseUrl + '/login';
    const params = new HttpParams()
      .set('mail', mail)
      .set('password', password);

    this.httpClient.post<User>(request, params)
      .subscribe((user: User) => {
        if (user !== null) {
          this.setSessionItems(user);
        } else {
          alert('Le mail ou le mot de passe est incorrect ! ');
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      });
  }

  setSessionItems(user: User) {
    sessionStorage.setItem('id', user.id);
    sessionStorage.setItem('name', user.name);
    sessionStorage.setItem('firstName', user.firstName);
    sessionStorage.setItem('mail', user.mail);
    sessionStorage.setItem('password', user.password);
    sessionStorage.setItem('adress', user.address);
    sessionStorage.setItem('phone', user.phoneNumber);
    sessionStorage.setItem('role', user.role.name);
  }

  isLoggedIn() {
    const user = sessionStorage.getItem('id');
    return !(user === null);
  }

  isAdmin() {
    const user = new User();
    user.getSessionItems();
    return user.isAdmin();
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  register(user: User) {
    const request = this.baseUrl + '/register';

    this.httpClient.post<User>(request, user)
      .subscribe((userp: User) => {
        if (userp !== null) {
          this.setSessionItems(userp);
        } else {
          alert('L\'adresse mail est déjà utilisée !');
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      });
  }
}
