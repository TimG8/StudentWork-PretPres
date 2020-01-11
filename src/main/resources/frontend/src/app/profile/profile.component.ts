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

  type: "";

  constructor(
    private httpClient:HttpClient
  ) { }

  ngOnInit() {
    $('#success').modal('hide');
    $(".wrong").css("display","none");
    this.user = new User();
    this.user.getSessionItems();
  }

  updateMail(){
    $(".wrong").css("display","none");
    if(this.mail == this.user.mail){
      $("#wrongMailProfile").css("display","block");
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
          this.displayModal("mail");
          this.reset();
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
    $(".wrong").css("display","none");

    if(this.password != this.user.password){
      $("#wrongPasswordProfile").css("display","block");
      return;
    }

    if(this.newPassword != this.confirmNewPassword){
      $("#wrongPasswordConfirmProfile").css("display","block");
      return;
    }

    if(!this.newPassword.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@\\$&\\*])(?=.{6,})")){
      $("#wrongPasswordMatchProfile").css("display","block");
      return;
    }

    if(this.password == this.newPassword){
      $("#wrongPasswordSameProfile").css("display","block");
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
            this.displayModal("mot de passe");
            this.reset();
          }
        },
        (error : HttpErrorResponse) => {
          console.log(error);
          alert("Une erreur à eu lieu.");
        });
  }

  updateName(){
    $(".wrong").css("display","none");
    if(!this.name.match("^[-'a-zA-ZÀ-ÖØ-öø-ſ]+$")){
      $("#wrongNameProfile").css("display","block");
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
            this.displayModal("nom");
            this.reset();
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
    $(".wrong").css("display","none");
    if(!this.firstName.match("^[-'a-zA-ZÀ-ÖØ-öø-ſ]+$")){
      $("#wrongFirstNameProfile").css("display","block");
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
            this.displayModal("prénom");
            this.reset();
          }else{
            alert("Erreur dans le changement de prénom !");
          }
        },
        (error : HttpErrorResponse) => {
          alert("Erreur dans le changement de prénom !");
        });
  }

  displayModal(type){
    this.type = type;
    $('#success').modal('show');
  }

  reset(){
    this.firstName = "";
    this.name = "";
    this.newPassword = "";
    this.confirmNewPassword = "";
    this.password = "";
    this.mail = "";

    this.user.getSessionItems();
  }

}
