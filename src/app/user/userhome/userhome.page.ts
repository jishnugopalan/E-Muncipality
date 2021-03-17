import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
var c
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.page.html',
  styleUrls: ['./userhome.page.scss'],
})
export class UserhomePage implements OnInit {
cmp=[]
  constructor(private authService: AuthService,
    private router: Router) { }
    addSolution(id){
      console.log(id)
      this.authService.cmpid=id
      this.router.navigateByUrl("/addcomment")
    }
  ngOnInit() {
    this.authService.finduserdetails({"userid":this.authService.user.id}).subscribe((res:any)=>{
      console.log(res)
      this.authService.munid=res.muncipalityid
    })
    this.authService.viewpubliccomplaint({}).subscribe((res:any)=>{
      console.log(res)
      c=res
      this.cmp=c
    })
  }
  logout(){
  this.authService.logout();
   // this.router.navigateByUrl("home")
   }
 
}
