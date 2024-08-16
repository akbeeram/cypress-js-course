import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppChooserComponent } from './app-chooser/app-chooser.component';
import { LoginComponent } from './login/login.component';
import { SocialMediaComponent } from './social-media/social-media/social-media.component';
import { CompanyDetailsComponent } from './company-details/company-details/company-details.component';
import { InternetBankingComponent } from './internet-banking/internet-banking/internet-banking.component';
import { OnlineShoppingComponent } from './online-shopping/online-shopping/online-shopping.component';
import { MoneyTransferComponent } from './internet-banking/money-transfer/money-transfer.component';
import { OpenDepositComponent } from './internet-banking/open-deposit/open-deposit.component';
import { PostDetailsComponent } from './social-media/post-details/post-details.component';

const routes: Routes = [{
  path: 'chooseApp',
  component: AppChooserComponent
}, {
  path: 'social-media',
  children: [{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: SocialMediaComponent
  }, {
    path: 'post',
    component: PostDetailsComponent
  }]
}, {
  path: 'company-details',
  children: [{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: CompanyDetailsComponent
  }]
}, {
  path: 'internet-banking',
  children: [{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: InternetBankingComponent
  }, {
    path: 'money-transfer',
    component: MoneyTransferComponent
  }, {
    path: 'open-deposit',
    component: OpenDepositComponent
  }]
}, {
  path: 'online-shopping',
  children: [{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: OnlineShoppingComponent
  }]
}, {
  path: '',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
