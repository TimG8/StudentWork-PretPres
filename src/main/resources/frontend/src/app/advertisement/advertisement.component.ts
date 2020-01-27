import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/model.user';
import { Advertisement } from '../model/model.advertisement';
import { AdvertisementService } from '../service/advertisement.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})

export class AdvertisementComponent implements OnInit {
  user: User;
  announcer: User;
  ad: Advertisement;

  constructor(
    private route: ActivatedRoute,
    private adService: AdvertisementService,
    private userService: UsersService,
    private router: Router) {
    this.user = new User();
    this.ad = new Advertisement();
  }

  ngOnInit() {
    this.user.getSessionItems();

    this.route.paramMap.subscribe(params => {
      this.getAdvertisement(this.route.snapshot.params.id);
    });
  }

  getAdvertisement(uuid) {
    this.adService.findByUuid(uuid).subscribe((ad: Advertisement) => {
      if(ad.pic != null){
        ad.picture = 'data:image/jpeg;base64,' + ad.pic.image;
      }
      this.ad = ad;

      if (!this.ad.validated && !this.user.isAdmin()) {
        this.router.navigate(['all-advertisements']);
      }

      this.announcer = this.ad.user;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }
}
