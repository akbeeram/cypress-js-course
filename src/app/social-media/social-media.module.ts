import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaComponent } from './social-media/social-media.component';
import { AppCommonModule } from '../common/common.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { PostCommentComponent } from './post-comment/post-comment.component';



@NgModule({
  declarations: [
    SocialMediaComponent,
    PostListComponent,
    PostDetailsComponent,
    UserListComponent,
    PostCommentComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    RouterModule,
    FormsModule
  ]
})
export class SocialMediaModule { }
