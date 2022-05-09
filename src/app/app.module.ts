import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { HeadComponent } from './shared/head/head.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './shared/home/home.component';
import { IndexComponent } from './shared/index/index.component';

import { MetismenuAngularModule } from '@metismenu/angular';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    HeadComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    MetismenuAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
