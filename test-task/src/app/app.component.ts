import { Component, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  game = this.sanitizer.bypassSecurityTrustResourceUrl('assets/game-files/classic/index.html');
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public sanitizer: DomSanitizer
  ) {
    this.initializeApp();
  }

  onChanged(value) {
    this.game = this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
