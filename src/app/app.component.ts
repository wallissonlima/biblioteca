import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.sideMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  navigate: any;
  sideMenu(){
    this.navigate =
    [
      {
        title : "Home",
        url   : "/home",
        icon  : "library-sharp"
      },
      {
        title : 'Clientes',
        url   : '/clientes',
        icon  : 'people-sharp'
      },
      {
        title : 'Livros',
        url   : '/livros',
        icon  : 'book-sharp'
      },
      {
        title : 'Revistas',
        url   : '/revistas',
        icon  : 'journal-sharp'
      },
      {
        title : "Jornais",
        url   : "/jornais",
        icon  : "reader-sharp",
      },
      {
        title : "Musicas",
        url   : "/musicas",
        icon  : "disc-sharp",
      },    
      {
        title : "Notebooks",
        url   : "/notebooks",
        icon  : "laptop-sharp",
      },
      {
        title : "Configurações",
        url   : "/configuracoes",
        icon  : "settings-sharp"
      }
    ]
  }
}
