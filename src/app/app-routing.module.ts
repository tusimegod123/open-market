import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FeaturesComponent } from './Components/features/features.component';
import { HomeComponent } from './Components/home/home.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductssComponent } from './Components/productss/productss.component';
import { SignupComponent } from './Components/signup/signup.component';


const routes: Routes = [
  // {path: '', pathMatch: "full", redirectTo: ""},
  {path:'', component:LandingpageComponent},
  {path: 'products', component:ProductssComponent},
  {path: 'features', component:FeaturesComponent},
  {path:'contact', component:ContactComponent},
  {path: 'about', component:AboutComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'home', component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
