import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { NewAdvertisementComponent } from './new-advertisement/new-advertisement.component';
import { MyAdvertisementComponent } from './my-advertisement/my-advertisement.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AllAdvertisementsComponent } from './all-advertisements/all-advertisements.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { SearchAdvertisementComponent } from './search-advertisement/search-advertisement.component';
import { ModifyAdvertisementComponent } from './modify-advertisement/modify-advertisement.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ProfileComponent,
    NewAdvertisementComponent,
    MyAdvertisementComponent,
    UsersComponent,
    HomeComponent,
    AllAdvertisementsComponent,
    AdvertisementComponent,
    SearchAdvertisementComponent,
    ModifyAdvertisementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
