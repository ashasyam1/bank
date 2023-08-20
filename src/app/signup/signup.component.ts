import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../s/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  pswMatch: boolean = false


  //Modal for signup form
  signUpModelForm = this.fb.group({

    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    cpsw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })
  constructor(private rout: Router, private fb: FormBuilder, private ds: DataService) { }  //dependency injection

  ngOnInit(): void { }
  //methods
 
  Signup() {
   
    var path = this.signUpModelForm.value
    var acno = path.acno
    var uname = path.uname
    var psw = path.psw
    var cpsw = path.cpsw

    if (this.signUpModelForm.valid) {
      if (psw == cpsw){
        this.pswMatch = false
        //api call
        this.ds.signupApi(acno,uname,psw).subscribe((response: any)=>{
          //console.log(responce)
          //alert
          alert(`${response.uname}registered successfully`)
          this.rout.navigateByUrl("")

        },
          response => {
            alert(response.error)
          }
        )
      }
      else {
        this.pswMatch = true
      }
    }
    else {
      alert("invalid form")
    }
  }
}



