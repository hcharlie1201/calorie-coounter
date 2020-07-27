import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Client } from '../../models/Client';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  loggedUser: string;
  showRegister: boolean;

  constructor(
    private router: Router,
    private auth: AuthService,
    private flash: FlashMessagesService
  ) {}

  ngOnInit() {
    this.auth.getAuth().subscribe((auth) => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  logoutClick() {
    this.auth.signOut();
    this.flash.show('You logged out', {
      cssClass: 'alert-success',
      timeout: 1000,
    });
    this.router.navigate['/logout'];
  }
}
