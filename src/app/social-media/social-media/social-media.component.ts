import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.less']
})
export class SocialMediaComponent implements OnInit {
  public postList: any = [];
  public userList: any = [];
  selectedPage = 1;
  perPagePosts = '5';
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadData();
    // this.router.navigate(['home'], { relativeTo: this.route });
  }
  public loadData() {
    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()),
      fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
    ])
      // .then(response => response.json())
      .then(([userList, postList]) => {
        this.userList = userList
          .filter((j: any) => j.id != 1)
          .map((m: any, i: number) => {
            return {
              ...m,
              isFriend: [2, 5, 8].indexOf(m.id) > -1
            };
          })
        this.postList = postList
          .map((post: any) => {
            return {
              ...post,
              author: userList.find((u: any) => u?.id == post?.userId),
              comments: this.getRandomNumber(),
              likes: this.getRandomNumber(),
              shares: this.getRandomNumber(),
              saves: this.getRandomNumber(),
            }
          }).reverse();
      });
  }
  public getRandomNumber() {
    return Math.ceil(Math.random() * 10);
  }
  public handleCommentEmojiClick(event: any) {
    console.log(event);
    var postItem = this.postList.find((post: any) => post.id == event.post.id);
    var item = postItem.commentList.find((c: any) => c.id == event.comment.id);
    console.log(item); if (event?.type == 'LIKE') {
      if (item.heartFilled) {
        item.likes--;
        item.heartFilled = false;
      } else {
        item.likes++;
        item.heartFilled = true;
      }
    }
    if (event?.type == 'SHARE') {
      item.shares++;
    }
    if (event?.type == 'SAVE') {
      if (item.commentSaved) {
        item.saves--;
        item.commentSaved = false;
      } else {
        item.saves++;
        item.commentSaved = true;
      }
    }
  }
  public handleEmojiClick(event: any) {
    console.log(event);
    var item = this.postList.find((post: any) => post.id == event.post.id);
    if (event?.type == 'LIKE') {
      if (item.heartFilled) {
        item.likes--;
        item.heartFilled = false;
      } else {
        item.likes++;
        item.heartFilled = true;
      }
    }
    if (event?.type == 'SHARE') {
      item.shares++;
    }
    if (event?.type == 'SAVE') {
      if (item.postSaved) {
        item.saves--;
        item.postSaved = false;
      } else {
        item.saves++;
        item.postSaved = true;
      }
    }
    if (event?.type == 'COMMENT') {
      if (item.showComments) {
        item.showComments = false;
      } else {
        if (item.commentList?.length) {
          item.showComments = true;
        } else {
          fetch(`https://jsonplaceholder.typicode.com/posts/${item?.id}/comments`)
            .then(response => response.json())
            .then((commentList: any) => {
              item.showComments = true;
              item.commentList = commentList
                .map((comment: any) => {
                  return {
                    ...comment,
                    likes: this.getRandomNumber(),
                    shares: this.getRandomNumber(),
                    saves: this.getRandomNumber(),
                  }
                });
            });
        }
      }
    }
  }
}
