import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistroempleadosComponent } from './registroempleados/registroempleados.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoFoundComponent } from './no-found/no-found.component';

import { Routes, RouterModule} from '@angular/router';

import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';


const RouterConfig: Routes = [

  {"path": "", "component": RegistroempleadosComponent},
  {"path": "users", "component": RegistroempleadosComponent},
  {"path": "users/id", "component": RegistroempleadosComponent},
  {"path": "**", "component": NoFoundComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    RegistroempleadosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(RouterConfig, {useHash:true})

  ],
  providers: [DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
