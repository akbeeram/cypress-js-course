import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public email: string = '';
  public gender: string = '';
  public username: string = '';
  public password: string = '';
  public isLoginInProgress: boolean = false;
  public isSignUpForm: boolean = true;
  public loginErr: any = null;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  public handleBtnClick() {
    this.isLoginInProgress = true;
    this.loginErr = null;
    setTimeout(() => {
      if (this.isSignUpForm) {
        if (this.username == 'test1') {
          // toast server error
          this.loginErr = {
            msg: 'Unknown error occurred, please try again after some time.'
          };
          this.isLoginInProgress = false;
          setTimeout(() => {
            this.loginErr = null;
          }, 4000);
        } else {
          const obj = {
            email: this.email, username: this.username, password: this.password,
            isLoggedIn: true
          }
          window.localStorage.setItem('current_user', JSON.stringify(obj));
          window.sessionStorage.setItem('current_user', JSON.stringify(obj));
          document.cookie = `isLoggedIn=true; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/`;
          document.cookie = `username=${this.username}; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/`;
          document.cookie = `password=${this.password}; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/`;
          document.cookie = `email=${this.email}; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/`;
          this.router.navigate(['/chooseApp']);
        }
      } else {
        if (this.username == 'test1') {
          // toast incorrect combination
          this.loginErr = {
            msg: 'Incorrect Username & Password combination.'
          };
          this.isLoginInProgress = false;
          setTimeout(() => {
            this.loginErr = null;
          }, 4000);
        } else {
          const obj = {
            username: this.username, password: this.password,
            isLoggedIn: true
          }
          window.localStorage.setItem('current_user', JSON.stringify(obj));
          window.sessionStorage.setItem('current_user', JSON.stringify(obj));
          document.cookie = `isLoggedIn=true; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/`;
          document.cookie = `username=${this.username}; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/`;
          document.cookie = `password=${this.password}; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/`;
          this.router.navigate(['/chooseApp']);
        }
      }
    }, 2000);

  }
  public isSubmitEnabled() {
    if (this.isSignUpForm) {
      return !this.email || !this.gender || !this.password || !this.username || this.isLoginInProgress ? true : null;
    } else {
      return !this.password || !this.username || this.isLoginInProgress ? true : null;
    }

  }
}
