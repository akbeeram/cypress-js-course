import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-chooser',
  templateUrl: './app-chooser.component.html',
  styleUrls: ['./app-chooser.component.less']
})
export class AppChooserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  public openSite(siteType: string) {
    switch (siteType) {
      case 'Social Media':
        this.router.navigate(['/social-media/home']);
        break;
      case 'Company':
        this.router.navigate(['/company-details/home']);
        break;
      case 'Internet Banking':
        this.router.navigate(['/internet-banking/home']);
        break;
    }
  }
}
