import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../s/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pswMatch: boolean = false

  data = "Happy banking with us ..."
 // pdata = "Enter your Account Number "

 
  //seviceData: any = ""

  //modal for login form

  loginModelForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-z]+')]]

  })



  constructor(private rout: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void { }
  //   console.log(this.ds.sData)
  //   this.seviceData=this.ds.sData
  // }

  // login(a:any,b:any){
  login() {
    // this.ds.accessData("hello")
    // console.log(a.value)
    // console.log(b.value)
    //console.log(this.accno)
    //console.log(this.pswd)
    if(this.loginModelForm.valid){
      var acno=this.loginModelForm.value.acno
      var psw=this.loginModelForm.value.psw
      //api call
      this.ds.loginApi(acno,psw).subscribe((response:any)=>{
        alert(`${response.uname} logined successfully`)

        localStorage.setItem("currentUname",response.uname)
        localStorage.setItem("currentAcno",response.acno)
        localStorage.setItem("token",JSON.stringify(response.token))


        this.rout.navigateByUrl("home")
        },
      response=>{
        alert(response.error)
      }
      )

    }
    else {
      alert(" invalid form")
    }
}
}
//this.rout.navigateByUrl("home")


  // acnoChange(event: any) {
  //   console.log(event.target.value)

  // }
  // pswdChange(event: any) {
  //   this.accno = event.target.value
  //   console.log(this.accno)
  // }
  // loginrout()
  // {
  //  this.rout.navigateByUrl("home") 
  // }


