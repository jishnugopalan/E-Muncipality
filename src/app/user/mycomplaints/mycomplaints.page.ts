import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var c
@Component({
  selector: 'app-mycomplaints',
  templateUrl: './mycomplaints.page.html',
  styleUrls: ['./mycomplaints.page.scss'],
})
export class MycomplaintsPage implements OnInit {
ctype=""
cmp=[]
viewprivate(id){
  console.log(id)
  this.authService.cmpid=id
    this.router.navigateByUrl("/usersolutions")
  
}
viewpublic(id){
  console.log(id)
  this.authService.cmpid=id
    this.router.navigateByUrl("/addcomment")
}
delete(id){
  this.authService.deletecomplaint({"complaintid":id}).subscribe(async (res:any)=>{
    console.log(res)
    const toast = await this.toastController.create({
      message: 'Complaint deleted successfully',
      duration: 2000
    });
    toast.present();
    this.ngOnInit()
  })
}
get(){
 this.authService.viewmycomplaint({"userid":this.authService.user.id,"ctype":this.ctype}).subscribe((res:any)=>{
console.log(res)
c=res
this.cmp=c
 })
}
  constructor(private authService: AuthService,
    private router: Router,public toastController: ToastController) { }

  ngOnInit() {
  }

}
