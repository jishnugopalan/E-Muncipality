import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
var c
@Component({
  selector: 'app-viewcomplaint',
  templateUrl: './viewcomplaint.page.html',
  styleUrls: ['./viewcomplaint.page.scss'],
})
export class ViewcomplaintPage implements OnInit {
  cmp=[]

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  addSolution(id){
    console.log(id)
    this.authService.cmpid=id
    this.router.navigateByUrl("/addsolution")
  }
  ngOnInit() {
    this.authService.viewcomplaint({"muncipalityid":this.authService.munid}).subscribe((res:any)=>{
      console.log(res)
      c=res
      this.cmp=c
    })
  }

}
