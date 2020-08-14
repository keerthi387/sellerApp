import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { from } from 'rxjs';
import { NewpropertyComponent } from './newproperty/newproperty.component';
import {ReadmoreComponent} from './readmore/readmore.component';
import {RegisterComponent} from './register/register.component';
import{LoginComponent} from './login/login.component';
import{GetfulldataComponent} from './getfulldata/getfulldata.component';

const routes: Routes = [{path:'',component:HomeComponent},{path:'newproperty',component:NewpropertyComponent},
{path:'readmore/:id',component:ReadmoreComponent},{path:'property',component:HomeComponent},
{path:'register',component:RegisterComponent},{path:'login',component:LoginComponent},{path:'getfulldata/:id',component:GetfulldataComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
