import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { Ptb1Component } from './ptb1/ptb1.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    TopmenuComponent,
    RoutingComponents,
    Ptb1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
