import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { PokenewsComponent } from './components/pokenews/pokenews.component';
=======
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> RegisterComponent

@NgModule({
  declarations: [
    AppComponent,
    PokenewsComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
