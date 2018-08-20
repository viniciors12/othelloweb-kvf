import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../servicios/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  constructor(public authService: AuthService,
    public router:Router) { }

  //metodo cuando la app carga
  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        console.log('login: '+this.isLogin);
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email;
      } else {
        this.isLogin = false;
        console.log('login: '+this.isLogin);
      }
    });
  }

  onClickLogout(){
    console.log('AQUI TOY ');
    this.authService.logout();
    this.router.navigate(['/']);
    console.log('login: '+this.isLogin);
  }

}
