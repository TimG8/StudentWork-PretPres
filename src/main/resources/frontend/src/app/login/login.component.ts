import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthentificationService} from "../service/authentification.service";
import {User} from "../model/model.user";
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService : AuthentificationService) { }

  ngOnInit() {
  }

  mail = ''
  password = ''
  invalidLogin = false


  checkLogin() {
    if (this.loginService.authenticate(this.mail, this.password)) {
      this.invalidLogin = false;
      $('#signin').modal('hide');
    } else {
      alert("Bad login/password");
      this.invalidLogin = true;
    }
  }

}
