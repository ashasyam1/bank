import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../s/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private rout:Router, private ds:DataService,private fb:FormBuilder,private datePipe:DatePipe){}
 user:any=""
 acno:any=""
 profileData:any={}
 balanceEnquiry:any={}
 message:any=""
 status:any=true
 shareAcno:any=""


 //model form for money transfer
 moneyTransferForm=this.fb.group({
 toAcno:['',[Validators.required,Validators.pattern('[0-9]+')]],
 amount:['',[Validators.required,Validators.pattern('[0-9]+')]], 
 psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]] 
 })
  
ngOnInit():void{
if(!localStorage.getItem("currentAcno")){
  alert("please login first")
  this.rout.navigateByUrl("")
}

 if(localStorage.getItem("currentUname")){
      this.user=localStorage.getItem("currentUname")
    }
  }
  
accountStatement(){
  this.rout.navigateByUrl("reg")
}
  logout(){
    localStorage.removeItem("currentAcno")
    localStorage.removeItem("currentUname")
    this.rout.navigateByUrl("")
}

profileView(){
if (localStorage.getItem("currentAcno")) {
  this.acno=localStorage.getItem("currentAcno")
  //console.log(this.acno)
  }
  this.ds.getProfile(this.acno).subscribe((response:any)=>{
      //console.log(response)

    this.profileData=response
  })
}
getBalance(){
  if (localStorage.getItem("currentAcno")) {
    this.acno=localStorage.getItem("currentAcno")
    //console.log(this.acno)
    }
    this.ds.getBalance(this.acno).subscribe((response:any)=>{
        //console.log(response)
  
      this.balanceEnquiry=response
    })
}
Transfer(){
  if(this.moneyTransferForm.valid){
    //fromacno
  if (localStorage.getItem("currentAcno")) {
    this.acno=localStorage.getItem("currentAcno") 
  }
  var path=this.moneyTransferForm.value
  //toacno
  var toAcno=path.toAcno
  //console.log(toAcno);
  
  //psw
  var psw=path.psw
  //console.log(psw);
  
  //amount
  var amount=path.amount
  //console.log(amount);
  //date
  var dateTime=new Date()
  var dateData=this.datePipe.transform(dateTime,'short' )//for date format
  //console.log(dateData);

  //api call
  this.ds.moneyTransferApi(this.acno,toAcno,psw,amount,dateData).subscribe((result:any)=>{
    //console.log(result);
    this.message=result.message
    this.status=true
    
  },
  result=>{
    this.message=result.error.message
    this.status=false
  }
  )
  
}
else{
  this.message="invalid form"
  this.status=false
}
  
}
deleteAc(){
if(localStorage.getItem('currentAcno')){
  this.shareAcno=localStorage.getItem('currentAcno')
}
}
cancel(){
  this.shareAcno=""
}
deleteAccount(event:any)
{
  console.log(event);
this.ds.acDelete(event).subscribe((result:any)=>{
    alert(`${event} deleted successfully`)
    this.logout()
    // this.rout.navigateByUrl("")
   })

}
}