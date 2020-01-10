import { Component, OnInit } from '@angular/core';
import {User} from "../model/model.user";

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

  constructor() { }

  ngOnInit() {
    this.user = new User();
    this.user.getSessionItems();
  }

}
