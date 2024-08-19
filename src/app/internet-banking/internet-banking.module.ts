import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternetBankingComponent } from './internet-banking/internet-banking.component';
import { AppCommonModule } from '../common/common.module';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { OpenDepositComponent } from './open-deposit/open-deposit.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InternetBankingComponent,
    MoneyTransferComponent,
    OpenDepositComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InternetBankingModule { }
