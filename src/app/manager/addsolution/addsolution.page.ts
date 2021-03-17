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
  async add(id){
  if(this.sol!=""){
    this.authService.addsolution({"muncipalityid":this.authService.munid,"complaintid":this.authService.cmpid,"solution":this.sol}).subscribe(async (res:any)=>{
      console.log(res)
    this.authService.addnotification({"userid":this.authService.user.id,"complaintid":this.authService.cmpid,"recieverid":id,"content":"A solution is added to your complaint","ntype":"solution"}).subscribe((res:any)=>{
      console.log(res)
    })
      const toast = await this.toastController.create({
        message: 'Solution added successfully',
        duration: 2000
      });
      toast.present();
      this.router.navigateByUrl("/viewsolutions")
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
    this.authService.viewcomplaintbyid({"complaintid":this.authService.cmpid}).subscribe((res:any)=>{
      console.log(res);
      c=res
      this.cmp=c
    })
    this.authService.viewsolution({"complaintid":this.authService.cmpid}).subscribe((res:any)=>{
      console.log(res);
      s=res
      this.solution=s
     
    })

  }

}
