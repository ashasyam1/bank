import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(transactionArray:any[],searchTerm:string,searchType:string): any[] {
    //empty array to store output
    const result:any=[]

    //pipe logic
    if(!transactionArray || !searchTerm || !searchType){
      return transactionArray
    }
    else{
    transactionArray.forEach(item=>{
      if(item[searchType].includes(searchTerm)){ //searchtype=>credit or  or all for all use ""
       result.push(item)
       }               
    })

//return ouput array
   return result
  }
}
}
