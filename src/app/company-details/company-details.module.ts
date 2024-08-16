import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { AppCommonModule } from '../common/common.module';



@NgModule({
  declarations: [
    CompanyDetailsComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule
  ],
})
export class CompanyDetailsModule { }
