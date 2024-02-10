import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todos : any[];
constructor(){
  this.todos = [

    {
     id:1,
     name:"tastk one",
     description: "completed"
   },
   {
     id:2,
     name:"tastk two",
     description: "not completed"
   },
   {
     id:3,
     name:"tastk three",
     description: "completed"
   }
   ]
}

del(todo:any){
console.log(todo);
const index = this.todos.indexOf(todo);
this.todos.splice(index,1)
}
}
