import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'demo',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
  {
    path: 'inside',
    loadChildren: () => import('./pages/inside/inside.module').then( m => m.InsidePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then( m => m.DemoPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'managerreg',
    loadChildren: () => import('./admin/managerreg/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'userhome',
    loadChildren: () => import('./user/userhome/userhome.module').then( m => m.UserhomePageModule)
  },
  {
    path: 'adminhome',
    loadChildren: () => import('./admin/adminhome/adminhome.module').then( m => m.AdminhomePageModule)
  },
  {
    path: 'userdetails',
    loadChildren: () => import('./userdetails/userdetails.module').then( m => m.UserdetailsPageModule)
  },
  {
    path: 'managerhome',
    loadChildren: () => import('./manager/managerhome/managerhome.module').then( m => m.ManagerhomePageModule)
  },
  {
    path: 'viewcomplaint',
    loadChildren: () => import('./manager/viewcomplaint/viewcomplaint.module').then( m => m.ViewcomplaintPageModule)
  },
  {
    path: 'viewpubliccomplaint',
    loadChildren: () => import('./user/viewpubliccomplaint/viewcomplaint.module').then( m => m.ViewcomplaintPageModule)
  },
  {
    path: 'viewsolutions',
    loadChildren: () => import('./manager/viewsolutions/viewcomplaint.module').then( m => m.ViewcomplaintPageModule)
  },
  {
    path: 'addsolution',
    loadChildren: () => import('./manager/addsolution/addsolution.module').then( m => m.AddsolutionPageModule)
  },
  {
    path: 'addcomment',
    loadChildren: () => import('./user/addcomment/addsolution.module').then( m => m.AddsolutionPageModule)
  },
  {
    path: 'solutions',
    loadChildren: () => import('./manager/solutions/addsolution.module').then( m => m.AddsolutionPageModule)
  },
  {
    path: 'usersolutions',
    loadChildren: () => import('./user/solutions/addsolution.module').then( m => m.AddsolutionPageModule)
  },
  {
    path: 'addcomplaint',
    loadChildren: () => import('./user/addcomplaint/addcomplaint.module').then( m => m.AddcomplaintPageModule)
  },
  {
    path: 'notifictaion',
    loadChildren: () => import('./manager/notifictaion/notifictaion.module').then( m => m.NotifictaionPageModule)
  },
  {
    path: 'usernotifictaion',
    loadChildren: () => import('./user/notifictaion/notifictaion.module').then( m => m.NotifictaionPageModule)
  },
  {
    path: 'mycomplaints',
    loadChildren: () => import('./user/mycomplaints/mycomplaints.module').then( m => m.MycomplaintsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./user/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./changepassword/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'editmuncipality',
    loadChildren: () => import('./user/editmuncipality/editmuncipality.module').then( m => m.EditmuncipalityPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgortpassword/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'managersettings',
    loadChildren: () => import('./manager/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
