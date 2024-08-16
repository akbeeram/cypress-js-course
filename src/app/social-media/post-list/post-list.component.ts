import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less']
})
export class PostListComponent {
  public postList: any = [];
  selectedPage = 1;
  perPagePosts = '5';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadPosts();
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
  public openPost(i: number) {
    this.router.navigate(['../post'], { relativeTo: this.route });
  }
  public deletePost(i: number) {
    this.postList.splice(i, 1);
  }
  public handleDblClick(i: number) {
    this.router.navigate(['../post'], { relativeTo: this.route });
  }
  public handlePagination(e: any) {
    var val = e?.srcElement?.value;
    this.perPagePosts = val == 'All' ? this.postList?.length : val;
  }

}
