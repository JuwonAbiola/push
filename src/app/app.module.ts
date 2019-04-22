import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { SuperTabsModule } from "ionic2-super-tabs";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { NotificationPage } from "../pages/notification/notification";
import { SignupPage } from "../pages/signup/signup";
import { ProfilePage } from "../pages/profile/profile";
import { OngoingPage } from "../pages/ongoing/ongoing";
import { PastPage } from "../pages/past/past";
import { DelhistoryPage } from "../pages/delhistory/delhistory";
import { PdetailsPage } from "../pages/pdetails/pdetails";
import { PaymentPage } from "../pages/payment/payment";
import { AddmoneyPage } from "../pages/addmoney/addmoney";
import { EntercardPage } from "../pages/entercard/entercard";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    NotificationPage,
    SignupPage,
    ProfilePage,
    OngoingPage,
    PastPage,
    DelhistoryPage,
    PdetailsPage,
    PaymentPage,
    AddmoneyPage,
    EntercardPage
  ],
  imports: [
    BrowserModule,
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    NotificationPage,
    SignupPage,
    ProfilePage,
    OngoingPage,
    PastPage,
    DelhistoryPage,
    PdetailsPage,
    PaymentPage,
    AddmoneyPage,
    EntercardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
