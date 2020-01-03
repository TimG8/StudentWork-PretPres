import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../service/authentification.service";
import {User} from "../model/model.user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private loginService : AuthentificationService) { }

  ngOnInit() {
  }



}
