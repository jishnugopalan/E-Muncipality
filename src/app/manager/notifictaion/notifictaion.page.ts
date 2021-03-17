import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
var n
@Component({
  selector: 'app-notifictaion',
  templateUrl: './notifictaion.page.html',
  styleUrls: ['./notifictaion.page.scss'],
})
export class NotifictaionPage implements OnInit {
not=[]
  constructor(private authService: AuthService,
    private router: Router,) { }
view(id){
  console.log(id)
  this.authService.cmpid=id
    this.router.navigateByUrl("/addsolution")
}
  ngOnInit() {
    this.authService.viewnotification({"recieverid":this.authService.munid,"ntype":"private"}).subscribe((res:any)=>{
      console.log(res)
      n=res
      this.not=n
    })
  }

}
