import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private auth: AuthService,
    private flash: FlashMessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.auth.login(this.email, this.password).then(
      (tokien) => {
        this.flash.show('You are logged in yaya!!', {
          cssClass: 'alert-success',
          timeout: 4000,
        });
        this.router.navigate(['/']);
      },
      (err) => {
        this.flash.show(err.message, {
          cssClass: 'alert-danger',
          timeout: 4000,
        });
        this.router.navigate['/'];
      }
    );
  }
}
