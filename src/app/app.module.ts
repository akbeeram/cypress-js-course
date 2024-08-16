import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppChooserComponent } from './app-chooser/app-chooser.component';
import { LoginComponent } from './login/login.component';
import { SocialMediaModule } from './social-media/social-media.module';
import { CompanyDetailsModule } from './company-details/company-details.module';
import { InternetBankingModule } from './internet-banking/internet-banking.module';
import { OnlineShoppingModule } from './online-shopping/online-shopping.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppChooserComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocialMediaModule,
    CompanyDetailsModule,
    InternetBankingModule,
    OnlineShoppingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
