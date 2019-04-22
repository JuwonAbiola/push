import { Component, ViewChild } from "@angular/core";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import {
  Nav,
  Platform,
  NavController,
  App,
  AlertController
} from "ionic-angular";
import { HomePage } from "../pages/home/home";
import { timer } from "rxjs/observable/timer";
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { NotificationPage } from "../pages/notification/notification";
import { ProfilePage } from "../pages/profile/profile";
import { DelhistoryPage } from "../pages/delhistory/delhistory";
import { PdetailsPage } from "../pages/pdetails/pdetails";
import { PaymentPage } from "../pages/payment/payment";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = LoginPage;
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = PolicyPage;
  pages: Array<{ icon: string; name: string; component: any }>;

  im: { img: string; username: string; component: any };

  showSplash = true;

  constructor(
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public platform: Platform,
    public app: App,
    public alertCtrl: AlertController
  ) {
    this.initializeApp();

    this.pages = [
      { icon: "timer", name: "Delivery History", component: DelhistoryPage },
      { icon: "ios-card", name: "Payments", component: PaymentPage },
      { icon: "ios-pricetags", name: "Promotions", component: PdetailsPage },
      { icon: "ios-chatbubbles", name: "Support", component: NotificationPage },
      { icon: "alert", name: "About", component: NotificationPage },
      { icon: "ios-log-out", name: "Logout", component: LoginPage }
    ];

    this.im = {
      img: "assets/imgs/kal.png",
      username: "Celilia Jones",
      component: ProfilePage
    };
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so te platorm is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      timer(3000).subscribe(() => (this.showSplash = false)); // <-- hide animation after 3s
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
