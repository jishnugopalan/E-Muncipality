import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var c
var s
@Component({
  selector: 'app-addsolution',
  templateUrl: './addsolution.page.html',
  styleUrls: ['./addsolution.page.scss'],
})
export class AddsolutionPage implements OnInit {
  cmp=[]
 sol=""
 solution=[]
  constructor(
    private authService: AuthService,
    private router: Router,public toastController: ToastController
  ) { }
  delete(id){
this.authService.deletecomment({"commentid":id}).subscribe(async (res:any)=>{
  console.log(res)
  const toast = await this.toastController.create({
    message: 'Comment deleted successfully',
    duration: 2000
  });
  toast.present();
  this.ngOnInit()
})
  }
  async add(id){
  if(this.sol!=""){
    this.authService.addcomment({"complaintid":this.authService.cmpid,"comment":this.sol,"userid":this.authService.user.id}).subscribe(async (res:any)=>{
      console.log(res)
      this.authService.addnotification({"userid":this.authService.user.id,"complaintid":this.authService.cmpid,"recieverid":id,"content":"A new comment is added","ntype":"comment"}).subscribe((res:any)=>{
        console.log(res)
      })
      const toast = await this.toastController.create({
        message: 'Comment added successfully',
        duration: 2000
      });
      toast.present();
      this.ngOnInit()
     // this.router.navigateByUrl("/viewsolutions")
    })
  }
  else{
    const toast = await this.toastController.create({
      message: 'Please Write Something',
      duration: 2000
    });
    toast.present();
  }
  
}
  ngOnInit() {
    this.authService.viewpubliccomplaintbyid({"complaintid":this.authService.cmpid}).subscribe((res:any)=>{
      console.log(res);
      c=res
      this.cmp=c
    })
    this.authService.viewcomment({"complaintid":this.authService.cmpid}).subscribe((res:any)=>{
      console.log(res);
      s=res
      this.solution=s
     
    })

  }

}
