import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './componentes/login-page/login-page.component';
import {LoggedPageComponent} from './componentes/logged-page/logged-page.component';
import {RegisterPageComponent} from './componentes/register-page/register-page.component';
import {HomePageComponent} from './componentes/home-page/home-page.component';
import { GameModeComponent } from './componentes/game-mode/game-mode.component';
import { DifficultyComponent } from './componentes/difficulty/difficulty.component';
import {AuthGuard} from './guards/auth.guard';
import { IngameComponent } from './componentes/ingame/ingame.component';

const routes: Routes = [
  {path: 'login',component: LoginPageComponent},
  {path: 'logged',component: LoggedPageComponent, canActivate: [AuthGuard]},
  {path: 'register',component: RegisterPageComponent},
  {path: '',component: HomePageComponent},
  {path: 'game-mode',component: GameModeComponent,canActivate: [AuthGuard]},
  {path: 'difficulty',component: DifficultyComponent,canActivate: [AuthGuard]},
  {path: 'ingame',component: IngameComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
