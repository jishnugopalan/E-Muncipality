import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
var d
var m
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.page.html',
  styleUrls: ['./adminhome.page.scss'],
})
export class AdminhomePage implements OnInit {
district=[]
mun=[]
  constructor(private authService: AuthService) { }
logout(){
  this.authService.logout();
}
getMun(mun){
  console.log(mun)
  this.authService.viewmuncipality({"district":mun}).subscribe((res:any)=>{
    console.log(res)
    m=res
    this.mun=m
  })
 }

  ngOnInit() {
    this.authService.viewdistrict({}).subscribe((res:any)=>{
      console.log(res);
      d=res
      this.district=d
    })
  }

}
