import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.less']
})
export class AppHeaderComponent implements OnInit {

  @Input('title')
  headerTitle: string = "";

  @Input('homeUrl')
  homeUrl: string = '/chooseApp';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }
  public chooseApp() {
    this.router.navigate(['./chooseApp']);
  }

}
