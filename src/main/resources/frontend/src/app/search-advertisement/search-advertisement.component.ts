import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Advertisement } from '../model/model.advertisement';
import { AdvertisementService } from '../service/advertisement.service'

@Component({
  selector: 'app-search-advertisement',
  templateUrl: './search-advertisement.component.html',
  styleUrls: ['./search-advertisement.component.css']
})

export class SearchAdvertisementComponent implements OnInit {
  ads : Advertisement[];

  constructor(
    private advertisementService : AdvertisementService
  ) { }

  ngOnInit() {
      this.advertisementService.searchByTitle()
        .subscribe(data => {
          this.ads = data;
        });
  }
}
