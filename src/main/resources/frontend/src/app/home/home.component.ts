import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router'

import { Advertisement } from '../model/model.advertisement';
import { AdvertisementService } from '../service/advertisement.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  baseUrl = 'http://localhost:8080/advertisement';

  title : "";

  constructor(
    private router: Router,
    private advertisementService : AdvertisementService
  ) { }

  ngOnInit() { }

  search() {
    this.advertisementService.setSearchTitle(this.title);
    this.router.navigate(['/search-advertisement']);
  }
}
