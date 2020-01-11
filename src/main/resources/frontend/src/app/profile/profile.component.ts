import { Component, OnInit } from '@angular/core';
import {User} from "../model/model.user";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  baseUrl = 'http://localhost:8080/user';

  user : User;
  mail: "";
  password: "";
  newPassword: "";
  confirmNewPassword: "";
  name: "";
  firstName: "";

  constructor(
    private httpClient:HttpClient
  ) { }

  ngOnInit() {
    this.user = new User();
    this.user.getSessionItems();
  }

  updateMail(){
    if(this.mail == this.user.mail){
      alert("Le nouveau mail est le même que l'ancien");
      return;
    }

    let request = this.baseUrl+'/updateMail';
    let params = new HttpParams()
      .set("id", this.user.id)
      .set("mail", this.mail);

    this.httpClient.put<User>(request,params)
      .subscribe((user : User) => {
        if(user !== null){
          sessionStorage.setItem("mail",user.mail);
          $("#mailProfile").val(user.mail);

        }else{
          alert("Le mail existe déjà ! ");
        }
      },
        (error : HttpErrorResponse) => {
        console.log(error);
        alert("Une erreur à eu lieu.");
      });
  }

  updatePassword(){
    if(this.password != this.user.password){
      alert("Mot de passe incorrect ! ");
      return;
    }

    if(this.newPassword != this.confirmNewPassword){
      alert("Votre nouveau mot de passe et la confirmation de votre mot de passe sont différents !");
      return;
    }
    let request = this.baseUrl+'/updatePassword';
    let params = new HttpParams()
      .set("id", this.user.id)
      .set("password", this.newPassword);

    this.httpClient.put<User>(request,params)
      .subscribe((user : User) => {
          if(user !== null){
            sessionStorage.setItem("password",user.password);
          }
        },
        (error : HttpErrorResponse) => {
          console.log(error);
          alert("Une erreur à eu lieu.");
        });
  }

  updateName(){
    if(!this.name.match("^[-'a-zA-ZÀ-ÖØ-öø-ſ]+$")){
      alert("Le nom ne correspond pas à un vrai nom !");
      return;
    }

    let request = this.baseUrl+'/updateName';
    let params = new HttpParams()
      .set("id", this.user.id)
      .set("name",this.name);

    this.httpClient.post<User>(request,params)
      .subscribe((user : User) => {
          if(user !== null){
            sessionStorage.setItem("name",user.name);
            $('#nameProfile').val(user.name);
          }else{
            alert("Erreur dans le changement de nom !");
          }
        },
        (error : HttpErrorResponse) => {
          console.log(error);
          alert("Erreur dans le changement de nom !");
        });

  }

  updateFirstName(){
    if(!this.name.match("^[-'a-zA-ZÀ-ÖØ-öø-ſ]+$")){
      alert("Le prénom ne correspond pas à un vrai nom !");
      return;
    }
    let request = this.baseUrl+'/updateFirstName';
    let params = new HttpParams()
      .set("id", this.user.id)
      .set("firstName",this.firstName);

    this.httpClient.put<User>(request,params)
      .subscribe((user : User) => {
          if(user !== null){
            sessionStorage.setItem("firstName",user.firstName);
            $("#firstNameProfile").val(user.firstName);
          }else{
            alert("Erreur dans le changement de prénom !");
          }
        },
        (error : HttpErrorResponse) => {
          alert("Erreur dans le changement de prénom !");
        });
  }

}
