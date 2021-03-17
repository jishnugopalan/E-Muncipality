import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var image:any
@Component({
  selector: 'app-addcomplaint',
  templateUrl: './addcomplaint.page.html',
  styleUrls: ['./addcomplaint.page.scss'],
})
export class AddcomplaintPage implements OnInit {
cmp=""
ctype=""
  constructor(private authService: AuthService,
    private router: Router,public toastController: ToastController) { }
    async encodeImageFileAsURL() {
      console.log("err")
      console.log("err")
      var fileExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
      var filesSelected = document.getElementById("inputFileToLoad")["files"];
      var fileInput = document.getElementById('inputFileToLoad');
      var filePath = fileInput["value"];
      var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
      if(!allowedExtensions.exec(filePath)){
          // alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
          fileInput["value"] = '';
          image="empty"
         // return false;
          // const toast = await this.toastController.create({
          //   message: 'Please upload file having extensions .jpeg/.jpg/.png/.gif only.',
          //   duration: 2000
          // });
          // toast.present();
      
        }
        else{
          console.log(filesSelected.length)
          if (filesSelected.length > 0) {
            var fileToLoad = filesSelected[0];
      
            var fileReader = new FileReader();
      
            fileReader.onload = function(fileLoadedEvent) {
              var srcData = fileLoadedEvent.target["result"]; // <--- data: base64
              image=srcData;
              console.log(image)
            }
            fileReader.readAsDataURL(fileToLoad);
          }
        }
    }
add(){
  if(this.cmp!=""){
    this.authService.addcomplaint({"complainttype":this.ctype,"complaint":this.cmp,"muncipalityid":this.authService.munid,"userid":this.authService.user.id,"media":image}).subscribe((res:any)=>{
      console.log(res)
      this.authService.addnotification({"userid":this.authService.user.id,"complaintid":res._id,"recieverid":this.authService.munid,"content":"A new complaint is added","ntype":this.ctype}).subscribe(async (res:any)=>{
        console.log(res)
        const toast = await this.toastController.create({
          message: 'Complaint added successfully',
          duration: 2000
        });
        toast.present();
        this.router.navigateByUrl("/userhome")

      })

    })
  }
}
  ngOnInit() {
  }

}
