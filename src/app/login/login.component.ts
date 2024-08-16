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

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  public handleBtnClick() {
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
  public handleBlur() {

  }
}
