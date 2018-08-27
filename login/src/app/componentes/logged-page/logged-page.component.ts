import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../servicios/auth.service';


@Component({
  selector: 'app-logged-page',
  templateUrl: './logged-page.component.html',
  styleUrls: ['./logged-page.component.scss']
})
export class LoggedPageComponent implements OnInit {
  public nombreUsuario: string;
  public email: string;
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
        this.nombreUsuario = auth.displayName;
        this.email = auth.email;
        console.log(auth.displayName);
    });
  }

}
