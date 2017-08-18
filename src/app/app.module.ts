import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {UserProfileComponent} from './users/user-profile.component';
import {UserFormComponent} from './users/user-form.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { GlobalEventsManager } from './global-event-manager';
import { StorageService } from './services/storage.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurd } from './guard/auth.guard';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    UserFormComponent,
    UserProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    GlobalEventsManager,
    StorageService,
    AuthGaurd,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
