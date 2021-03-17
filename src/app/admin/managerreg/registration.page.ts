import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

import { AuthService } from '../../services/auth.service';
var d
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  credentialsForm: FormGroup;
  first=true
  second=false
  district=[]
  munForm: FormGroup;

  constructor(public loadingController: LoadingController,
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private router:Router,public toastController: ToastController) { }
  get name(){
    return this.credentialsForm.get('name');
  }
  get email(){
    return this.credentialsForm.get('email');
  }
  get phone(){
    return this.credentialsForm.get('phone');
  }
  get usertype(){
    return this.credentialsForm.get('usertype');
  }
  public errorMessages = {
    name: [
      { type: 'required', message: 'Name is required' },
      { type: 'maxlength', messages: 'Name cannot be longer than 100 charetors' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
    phone: [
      { type: 'required', message: 'Phone number is required' },
      { type: 'pattern', message: 'Please enter a valid phone number' },
      { type: 'maxlength', messages: 'Please enter a valid phone number' }
    ]
  };
  ngOnInit() {
    this.authService.viewdistrict({}).subscribe((res:any)=>{
      console.log(res);
      d=res
      this.district=d
    })
    this.munForm=this.formBuilder.group({
    muncipality: ['',Validators.required],
    district: ['',Validators.required],
    contact_number: [ '',
    [
      Validators.required,
      Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
      Validators.maxLength(10),
      Validators.minLength(10)
      
    ]],



    }),
    this.credentialsForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
        ]
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
          Validators.maxLength(10),
          Validators.minLength(10)
          
        ]
      ],
      
    });
  }
 
  async submit() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
    console.log(this.munForm.value)
    let data=Object.assign({"usertype":"manager"},{"password":this.credentialsForm.value.phone},this.credentialsForm.value)
    console.log(data)
    let mdata=Object.assign({"email":this.credentialsForm.value.email},this.munForm.value)
    console.log(mdata)
    this.authService.register(data).subscribe((res:any)=>{
      console.log(res)
      this.authService.addmanager(mdata).subscribe(async (res:any)=>{
        console.log(res)
        this.router.navigateByUrl("/adminhome")
        const toast = await this.toastController.create({
          message: 'Muncipality Details Added Successfully',
          duration: 2000
        });
        toast.present();

      })
    })
  }
 
  register() {
    this.first=false;
    this.second=true;
    console.log(this.credentialsForm.value)
    

   
    
      //this.router.navigateByUrl("/userdetails")
    
    
    // this.authService.register(this.credentialsForm.value).subscribe((res:any) => {
    //   console.log(res)
    //   var uid=res._id
    //   this.authService.uid=uid;
    //   this.router.navigateByUrl("/password")
     
    //   //this.authService.login(this.credentialsForm.value).subscribe();
    // });
  }
 
  }

