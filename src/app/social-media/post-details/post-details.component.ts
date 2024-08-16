import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.less']
})
export class PostDetailsComponent implements OnInit {

  postDetails: any = {};
  postComments: any = [];
  commentEditorOpen: boolean = false;
  public title: string = "";
  public email: string = "";
  public comment: string = "";

  ngOnInit(): void {
    this.loadPost();
  }
  public addComment() {
    console.log(this.title)
    console.log(this.email)
    console.log(this.comment)
    this.postComments.unshift({
      name: this.title, body: this.comment, email: this.email, postId: 1,
      id: this.postComments[this.postComments.length - 1].id + 1,
      comments: 0,
      likes: 0,
      shares: 0,
      saves: 0,

    });
    this.commentEditorOpen = false;
  }
  public openCommenEditor() {
    this.commentEditorOpen = !this.commentEditorOpen;
  }
  private loadPost(postId = 1) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.postDetails = {
          ...json,
          comments: this.getRandomNumber(),
          likes: this.getRandomNumber(),
          shares: this.getRandomNumber(),
          saves: this.getRandomNumber(),
        };
        this.loadComments();
      });
  }
  private loadComments(postId = 1) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
      .then(response => response.json())
      .then(json => {
        this.postComments = json.map((c: any) => {
          return {
            ...c,
            comments: this.getRandomNumber(),
            likes: this.getRandomNumber(),
            shares: this.getRandomNumber(),
            saves: this.getRandomNumber(),
          };
        });
        // renderComments()
      });
  }
  public getRandomNumber() {
    return Math.ceil(Math.random() * 10);
  }
}
