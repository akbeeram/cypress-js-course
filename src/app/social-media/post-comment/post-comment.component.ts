import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.less']
})
export class PostCommentComponent implements OnInit {
  @Input()
  public comment: any = null;
  @Output('onEmojiClick')
  public emojiClick: EventEmitter<any> = new EventEmitter<any>;

  ngOnInit(): void {

  }
  public handleEmojiClick(type: string, comment: any) {
    this.emojiClick.emit({ type, comment });
  }
}
