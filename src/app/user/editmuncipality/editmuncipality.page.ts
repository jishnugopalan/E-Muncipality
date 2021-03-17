import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var m
@Component({
  selector: 'app-editmuncipality',
  templateUrl: './editmuncipality.page.html',
  styleUrls: ['./editmuncipality.page.scss'],
})
export class EditmuncipalityPage implements OnInit {
mdetails=[]
  constructor(private authService: AuthService,
    private router: Router,public toastController: ToastController) { }
  


  ngOnInit() {
    this.authService.viewmuncipalitybyid({"userid":this.authService.user.id,"muncipalityid":this.authService.munid,}).subscribe((res:any)=>{
      console.log(res);
m=res
this.mdetails=m
      
    })
  }

}
