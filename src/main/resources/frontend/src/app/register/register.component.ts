import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../service/authentification.service';
import {User} from '../model/model.user';
declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  user: User;
  mail: '';
  password: '';
  name: '';
  passwordConfirm: '';
  firstname: '';
  phoneNumber: '';
  address: '';

  constructor(
    private service: AuthentificationService
  ) { }

  ngOnInit() { }

  registration() {
    this.user = new User();
    $('.wrong').css('display', 'none');

    let register = true;

    if (!this.password.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@\\$&\\*])(?=.{6,})')) {
      $('#wrongPasswordMatchRegister').css('display', 'block');
      register = false;
    }

    if (this.password !== this.passwordConfirm) {
      $('#wrongPassword').css('display', 'block');
      register = false;
    }

    if (!this.firstname.match('^[-\'a-zA-ZÀ-ÖØ-öø-ſ]+$')) {
      $('#wrongfirstname').css('display', 'block');
      register = false;
    }

    if (!this.name.match('^[-\'a-zA-ZÀ-ÖØ-öø-ſ]+$')) {
      $('#wrongName').css('display', 'block');
      register = false;
    }

    if (this.phoneNumber != null) {
      if (!this.phoneNumber.match('^((\\+)33|0)[1-9](\\d{2}){4}$')) {
        $('#wrongPhone').css('display', 'block');
        register = false;
      }
    }

    if (register) {
      this.user.password = this.password;
      this.user.mail = this.mail;
      this.user.firstName = this.firstname;
      this.user.name = this.name;
      this.user.role.name = 'User';
      this.user.phoneNumber = this.phoneNumber;
      this.user.address = this.address;
      console.log(this.user);
      this.service.register(this.user);
    }
  }
}
