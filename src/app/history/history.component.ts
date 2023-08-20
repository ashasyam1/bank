import { Component,OnInit } from '@angular/core';
import { DataService } from '../s/data.service';
import { Router } from '@angular/router';

import jspdf from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  //[x: string]: any;
  acno:any
  transactions:any=[]
  date:any
  searchKey:any=""
 // rout: any;
  constructor(private ds:DataService){}
 
  ngOnInit(): void {
//date
this.date=new Date()
console.log(this.date);
//acno
    if(localStorage.getItem("currentAcno")){
      this.acno=localStorage.getItem("currentAcno")
    }
    this.ds.transactionHistory(this.acno).subscribe((result:any)=>{
      this.transactions=result
      console.log(this.transactions);
      
    })
 }
  searchKeyChange(key:any){
  this.searchKey=key
  }
  convertPdf(){
    //create an object for jspdf
var pdf=new jspdf()
//set coloumns
let col=["Transaction Type","Amount","Account Holder Name","Date"]
//set rows
let row:any=[]
//style setting
//set size
pdf.setFontSize(16)
//set title
pdf.text("Account Statement",15,10)
//text color
pdf.setTextColor(99)
//font size reset
pdf.setFontSize(12)
//array of objects to array of array(nested array)
var allItems=this.transactions
for(let i of allItems){
  let rowData=[i.type,i.amount,i.user,i.date]
  row.push(rowData)
}
//convert nested to pdf
(pdf as any).autoTable(col,row,{startY:15})
//open pdf in new window
pdf.output('dataurlnewwindow')
//to downolad pdf automatically
pdf.save('ministatement.pdf')

  }
// Close(){
//   this'rout'].navigateByUrl("home")
// } 

}