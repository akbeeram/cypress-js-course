import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.less']
})
export class AppHeaderComponent implements OnInit {

  @Input('title')
  headerTitle: string = "Dashboard";

  @Input('homeUrl')
  homeUrl: string = '/chooseApp';

  public isDashboard: boolean = false;
  public currentUser: any = null;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isDashboard = this.router.url == '/chooseApp';
    this.currentUser = JSON.parse(window.localStorage.getItem('current_user') || '{}');
  }
  public chooseApp() {
    this.router.navigate(['./chooseApp']);
  }
  public logout() {
    this.router.navigate(['/']);
  }
}
