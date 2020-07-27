import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afsauth: AngularFireAuth) {}

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afsauth.signInWithEmailAndPassword(email, password).then(
        (userData) => resolve(userData),
        (err) => reject(err)
      );
    });
  }
}