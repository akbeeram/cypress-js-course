import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternetBankingComponent } from './internet-banking/internet-banking.component';
import { AppCommonModule } from '../common/common.module';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { OpenDepositComponent } from './open-deposit/open-deposit.component';



@NgModule({
  declarations: [
    InternetBankingComponent,
    MoneyTransferComponent,
    OpenDepositComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule
  ]
})
export class InternetBankingModule { }
