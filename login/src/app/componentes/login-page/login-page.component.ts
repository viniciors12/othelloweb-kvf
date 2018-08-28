import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service'; 
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(public router:Router, 
    public authService: AuthService,
    public flashMensaje: FlashMessagesService
  ) 
    {}
    
  ngOnInit() {
  }

  onClickFacebookLogin() {
    this.authService.loginFacebook()
      .then((res) => {
          this.router.navigate(['/logged']);
      }).catch( err => console.log(err.message));
  }

  onClickGoogleLogin() {
    this.authService.loginGoogle()
     .then((res) => {
         this.router.navigate(['/logged']);
     }).catch( err => console.log(err.message));
   }
 

  onSubmitLogin(){
    this.authService.loginEmail(this.email,this.password)
    .then ((res)=>{
      this.flashMensaje.show('Ingreso éxitoso.', {cssClass: 'alert-success',
      timeout:4000});
      this.router.navigate(['/logged']);
    }).catch((err)=>{
      this.flashMensaje.show(err.message, {cssClass: 'alert-danger',
      timeout:4000});
      this.router.navigate(['/login'])
  });

  

  }

}
