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


  checkLogin() {
    $(".wrong").css("display","none");

    if(!this.password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@\\$&\\*])(?=.{6,})")){
      $("#wrongPasswordMatch").css("display","block");
      return;
    }
    this.loginService.authenticate(this.mail, this.password);
  }

}
