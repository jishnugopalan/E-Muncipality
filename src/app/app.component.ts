import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  a:any
  name:any
 empty=false
 profile_pic:any
 pic=false
 usertype:any
 user=false
 admin=false
 manager=false
  public appPages = [
    { title: 'Home', url: 'userhome', icon: 'home' },
    { title: 'News Feeds', url: 'viewpubliccomplaint', icon: 'reader' },

    { title: 'Add Complaints', url: 'addcomplaint', icon: 'add' },
    { title: 'Notifications', url:'usernotifictaion', icon: 'notifications' },
    { title: 'My Complaints', url: 'mycomplaints', icon: 'book' },


    //{ title: 'My Profile', url: '/folder/Archived', icon: 'person' },
    { title: 'Settings', url: 'settings', icon: 'settings' },
    { title: 'About', url: 'about', icon: 'information' },


  ];
  public adminPages = [
    { title: 'Home', url: 'adminhome', icon: 'home' },
   // { title: 'News Feeds', url: '/folder/Favorites', icon: 'reader' },

    { title: 'Add Muncipality', url: 'managerreg', icon: 'add' },
    //{ title: 'Notifications', url: '/folder/Favorites', icon: 'notifications' },
    //{ title: 'My Muncipality', url: '/folder/Favorites', icon: 'people' },


   // { title: 'My Profile', url: '/folder/Archived', icon: 'person' },
    { title: 'Settings', url: 'managersettings', icon: 'settings' },
    { title: 'About', url: 'about', icon: 'information' },


  ];
  public managerPages = [
    { title: 'Home', url: 'managerhome', icon: 'home' },
    { title: 'View Complaints', url: 'viewcomplaint', icon: 'reader' },
    { title: 'View Solutions', url: 'viewsolutions', icon: 'chatbubble' },


    //{ title: 'Add Muncipality', url: 'managerreg', icon: 'add' },
    { title: 'Notifications', url: 'notifictaion', icon: 'notifications' },
    //{ title: 'My Muncipality', url: '/folder/Favorites', icon: 'people' },
    
    { title: 'Settings', url: 'managersettings', icon: 'settings' },
    { title: 'About', url: 'about', icon: 'information' },


  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
    //this.a=this.authService.user.email;
  console.log("inn")

  //console.log(this.authService.userid)

  }
  logout(){
   //this.authService.logout();
   this.router.navigateByUrl("home")
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.authenticationState.subscribe(state => {
        if (state) {
        console.log("user is"+this.authService.user.email)
        this.a=this.authService.user.email;
        this.authService.finduser({"email":this.authService.user.email}).subscribe((res:any)=>{
          console.log(res)
          this.name=res.name
          this.usertype=res.usertype
          this.profile_pic=res.profile_pic

          if(this.usertype=='user'){

            console.log("in user")
            this.admin=false
            this.manager=false
            this.user=true
            this.router.navigate(['userhome']);

          }
          else if(this.usertype=='admin'){
            console.log("in admin")
            this.user=false
            this.manager=false
            this.admin=true
            this.router.navigate(['adminhome']);

          }
          else if(this.usertype=='manager'){
            console.log("in manager")
            this.user=false
            this.admin=false
            this.manager=true
            this.router.navigate(['managerhome']);

          }
        })
         
        } else {
          this.router.navigate(['home']);
        }
    });
  });
}
ionViewWillEnter(){
  this.a=this.authService.user.email;
  console.log("inn")

}
}
