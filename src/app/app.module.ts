import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RfiPage } from '../pages/rfi/rfi';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RfiProvider } from '../providers/rfi/rfi';
import { LoginProvider } from '../providers/login/login';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { GlobalServiceProvider } from '../providers/global-service/global-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RfiPage,
    LoginPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RfiPage,
    LoginPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RfiProvider,
    LoginProvider,
    AuthenticationProvider,
    GlobalServiceProvider
  ]
})
export class AppModule {}
