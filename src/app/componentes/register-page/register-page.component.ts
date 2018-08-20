import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../servicios/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';


//import { CONNREFUSED } from 'dns';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(
    public  authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authService.registerUser(this.email, this.password)
    .then((res)=>{
      this.flashMensaje.show('Usuario creado correctamente.', {cssClass: 'alert-success',
      timeout:4000});
      this.router.navigate(['/logged']);
    }).catch((err)=>{console.log(err);
    })
  }

}
