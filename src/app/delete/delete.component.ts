import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  // create a variable to accept the data from paraent component
  @Input() childAcno:String|undefined
  //event creation for button no for not deleting account
  @Output() onCancel=new EventEmitter()
  //event to delete an account
  @Output() onDelete=new EventEmitter()
  noClick(){
     this.onCancel.emit()
  }
  acDelete(){
    this.onDelete.emit(this.childAcno)
  }

}
