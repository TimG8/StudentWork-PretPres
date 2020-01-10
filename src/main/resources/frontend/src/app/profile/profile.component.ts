import { Component, OnInit } from '@angular/core';
import {User} from "../model/model.user";
import {ProfileService} from "./profile.service";
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user : User;
  mail: "";
  password: "";
  newPassword: "";
  confirmNewPassword: "";
  name: "";
  firstName: "";

  constructor(
    private updateService : ProfileService
  ) { }

  ngOnInit() {
    this.user = new User();
    this.user.getSessionItems();
  }

  updateMail(){
    if(this.mail != this.user.mail){
      let user = this.user;
      user.mail = this.mail;
      this.updateService.updateMail(user);
      this.user.getSessionItems();
    }
    alert("Mail updated");
  }

  updatePassword(){
    alert("password updated");
  }

  updateName(){
    if(!this.name.match("^[-'a-zA-ZÀ-ÖØ-öø-ſ]+$")){
      alert("Le nom ne correspond pas à un vrai nom !");
      return;
    }
    this.updateService.updateName(this.user.id,this.name);
    this.user.getSessionItems();

  }

  updateFirstName(){
    if(!this.name.match("^[-'a-zA-ZÀ-ÖØ-öø-ſ]+$")){
      alert("Le prénom ne correspond pas à un vrai nom !");
      return;
    }
    let user = this.user;
    user.firstName = this.firstName;
    this.updateService.updateFirstName(user);
    this.user.getSessionItems();
  }

}
