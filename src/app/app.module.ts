import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TopNavbarComponent } from './Components/top-navbar/top-navbar.component';
import { FooterAllComponent } from './Components/footer-all/footer-all.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';
import { FaqsComponent } from './Components/faqs/faqs.component';
import { ContactComponent } from './Components/contact/contact.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ProductssComponent } from './Components/productss/productss.component';
import {FeaturesComponent} from "./Components/features/features.component";
import { HomeComponent } from './Components/home/home.component';
import { HomeTopnavComponent } from './Components/home-topnav/home-topnav.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TopNavbarComponent,
    FooterAllComponent,
    LandingpageComponent,
    FaqsComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    ProductssComponent,
    FeaturesComponent,
    HomeComponent,
    HomeTopnavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
