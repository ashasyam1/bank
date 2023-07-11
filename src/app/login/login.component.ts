import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

data="Happy banking with us ..."
pdata="Enter your username "

constructor() {}
ngOnInit(): void {

}
login(){
  alert("login clicked")
}
}

