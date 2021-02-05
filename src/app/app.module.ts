import { GachaComponent } from './components/gacha/gacha.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokenewsComponent } from './components/pokenews/pokenews.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { HomepageComponent } from './components/homepage/homepage.component';
import {InterceptorService} from './services/interceptor.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PcPageComponent } from './components/pc-page/pc-page.component';


@NgModule({
  declarations: [
    AppComponent,
    PokenewsComponent,
    RegisterComponent,
    LoginPageComponent,
    HomepageComponent,
    GachaComponent,
    NavbarComponent,
    PcPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatGridListModule
  ],
  providers: [
    {
      provide: InterceptorService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
