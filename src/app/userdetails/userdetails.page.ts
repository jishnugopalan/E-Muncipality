import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
var d;
var m;
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.page.html',
  styleUrls: ['./userdetails.page.scss'],
})
export class UserdetailsPage implements OnInit {
  credentialsForm: any;
district=[]
dis=""
mun=[]
Mun=""
  constructor(public loadingController: LoadingController,
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private router:Router) { }


    getMun(mun){
     console.log(mun)
     this.authService.viewmuncipality({"district":mun}).subscribe((res:any)=>{
       console.log(res)
       m=res
       this.mun=m
     })
    }

    register() {
      console.log(this.credentialsForm.value)
      this.authService.userdetails=this.credentialsForm.value
      console.log(this.authService.userdetails)
      this.router.navigateByUrl("/password")
    }
  ngOnInit() {
    this.authService.viewdistrict({}).subscribe((res:any)=>{
      console.log(res);
      d=res
      this.district=d
    })
    this.credentialsForm = this.formBuilder.group({
      district:[
        '',[Validators.required]
      ],
      muncipalityid:[
        '',[Validators.required]
      ],
      wardnumber:[
        '',[Validators.required,
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),

        Validators.maxLength(3),
        ]
      ],
      housenumber:[
        '',[Validators.required,
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),

        Validators.maxLength(5),]
      ],
      adhaarnumber:[
        '',[Validators.required,
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),

        Validators.maxLength(12),
        Validators.minLength(12)]
      ]
      
    });
  }

}
