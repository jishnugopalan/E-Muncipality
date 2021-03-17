import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
var m
@Component({
  selector: 'app-managerhome',
  templateUrl: './managerhome.page.html',
  styleUrls: ['./managerhome.page.scss'],
})
export class ManagerhomePage implements OnInit {
mun=[]
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
logout(){
  this.authService.logout()
}
  ngOnInit() {
this.authService.findmanager({"email":this.authService.user.email}).subscribe((res:any)=>{
  console.log(res)
  m=[res]
  this.mun=m
  this.authService.munid=res._id
  console.log(this.authService.munid)
})
  }

}
