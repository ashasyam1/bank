import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//overloading header
const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})

//overloading header

export class DataService {
 

constructor(private http:HttpClient){ }

//metod to add token to api header
createHeader(){
  //httpheader class used to add header
  const headers=new HttpHeaders()
  //access token from local storage
  if(localStorage.getItem("token")){
    //convert json data so we need use parse
    var token=JSON.parse(localStorage.getItem("token") || "")
    //add token into header
   options.headers=headers.append('access_token',token)

  }
  return options
}

  //register
  signupApi(uname:any,acno:any,psw:any){
    const bodyData={
      acno,
      uname,
      psw
    }
    return this.http.post('http://localhost:3000/bankUser/userRegister/',bodyData) // url ,body
  }
  //login
  loginApi(acno:any,psw:any) {
    const bodyData={
      acno,
      psw
    }
    return this.http.post('http://localhost:3000/bankUser/user-login/',bodyData) // url ,body
  }
  //get user profile details
  getProfile(acno:any){
    return this.http.get('http://localhost:3000/bankUser/user-profile/'+acno,this.createHeader())
  }
  //get balance details api
  getBalance(acno:any){
    return this.http.get('http://localhost:3000/bankUser/user-balance/'+acno,this.createHeader())
  }



  //money transfer
  //fromacno,toacno,fromacnopsw,amount,dateand time
  moneyTransferApi(fromacno:any,toacno:any,psw:any,amount:any,date:any){
    const bodyData={
      fromacno,toacno,psw,amount,date
    }
    return this.http.post('http://localhost:3000/bankUser/money-Transfer',bodyData,this.createHeader())

  }
  transactionHistory(acno:any){
    return this.http.get('http://localhost:3000/bankUser/user-History/'+acno,this.createHeader())
 
  }

  //delete account api
  acDelete(acno:any){
    return this.http.delete('http://localhost:3000/bankUser/user-Delete/'+acno)
  
  }
  

}
  // accessData(data:any){
  //   console.log(data)
  // }

