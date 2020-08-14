import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { NewpropertyComponent } from './newproperty/newproperty.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { GetfulldataComponent } from './getfulldata/getfulldata.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NewpropertyComponent,
    ReadmoreComponent,
    RegisterComponent,
    LoginComponent,
    GetfulldataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
