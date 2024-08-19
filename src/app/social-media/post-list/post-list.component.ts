import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less']
})
export class PostListComponent {
  @Input()
  public postList: any = [];

  @Output('onEmojiClick')
  public emojiClick: EventEmitter<any> = new EventEmitter<any>;

  @Output('onCommentEmojiClick')
  public commentEmojiClick: EventEmitter<any> = new EventEmitter<any>;

  selectedPage = 1;
  perPagePosts = '5';
  public isLoading: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.loadPosts();
  }
  public handleEmojiClick(type: string, post: any) {
    this.emojiClick.emit({ type, post });
  }
  public handleCommentEmojiClick(event: any, post: any) {
    this.commentEmojiClick.emit({ ...event, post });
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
  public handlePagination(e: any) {
    var val = e?.srcElement?.value;
    this.perPagePosts = val == 'All' ? this.postList?.length : val;
  }

}
