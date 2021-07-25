import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth , private router:Router) { }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    setTimeout(() => {
      this.router.navigateByUrl('/general');
       
     }, 7000);
  }

  


  logout() {
    this.auth.signOut();
    localStorage.clear();
  }
}
