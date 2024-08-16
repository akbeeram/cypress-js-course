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
  private loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.postList = json.map((post: any) => {
          return {
            ...post,
            comments: this.getRandomNumber(),
            likes: this.getRandomNumber(),
            shares: this.getRandomNumber(),
            saves: this.getRandomNumber(),
          }
        });
      })
  }
  public getRandomNumber() {
    return Math.ceil(Math.random() * 10);
  }
  public handlePostClick(i: number) {

  }
  public handleDblClick(i: number) {

  }
  public handlePagination(e: any) {
    var val = e?.srcElement?.value;
    this.perPagePosts = val == 'All' ? this.postList?.length : val;
  }
}
