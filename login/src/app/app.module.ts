import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { LoggedPageComponent } from './componentes/logged-page/logged-page.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import {HomePageComponent} from './componentes/home-page/home-page.component';

import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';


import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {environment} from '../environments/environment';

import { AuthService } from './servicios/auth.service';

import {AuthGuard} from './guards/auth.guard';
import { GameModeComponent } from './componentes/game-mode/game-mode.component';
import { DifficultyComponent } from './componentes/difficulty/difficulty.component';
import { IngameComponent } from './componentes/ingame/ingame.component';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { PruebitaComponent } from './componentes/pruebita/pruebita.component';


@NgModule({
  declarations: [
    AppComponent,
    LoggedPageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    HomePageComponent,
    GameModeComponent,
    DifficultyComponent,
    PruebitaComponent,
    IngameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthService,FlashMessagesService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
