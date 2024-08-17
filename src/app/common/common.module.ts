import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { RouterModule } from '@angular/router';
import { ForbiddenUsernameValidatorDirective } from './validators/forbidden-username.validator';



@NgModule({
  declarations: [
    AppHeaderComponent,
    ForbiddenUsernameValidatorDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AppHeaderComponent,
    ForbiddenUsernameValidatorDirective
  ]
})
export class AppCommonModule { }
