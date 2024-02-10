import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
@Input() todo : any;
@Output() deleteTodo : EventEmitter<any> = new EventEmitter();

onclick(todo:any){
  console.log("delete clicked");
  this.deleteTodo.emit(todo)
}

}
