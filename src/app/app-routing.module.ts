import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokenewsComponent } from './components/pokenews/pokenews.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {LoginService} from './services/login.service';
import {LoginPageComponent} from './components/login-page/login-page.component';
import { GachaComponent } from './components/gacha/gacha.component';

const routes: Routes = [
  {
    path: 'news',
    component: PokenewsComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path:'gacha',
    component:GachaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
