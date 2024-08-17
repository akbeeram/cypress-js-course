import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.less']
})
export class SocialMediaComponent implements OnInit {
  public postList: any = [];
  selectedPage = 1;
  perPagePosts = '5';
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.router.navigate(['home'], { relativeTo: this.route });
  }
}
