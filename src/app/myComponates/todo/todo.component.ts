import { Component } from '@angular/core';
import { flush } from '@angular/core/testing';
import { Todos } from '../../Todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos !: Todos[];
  localitem: string | null;

  constructor() {
    this.localitem = localStorage.getItem("todos");
    if(this.localitem ==null){
      this.todos = [];
    } else{
      this.todos = JSON.parse(this.localitem);
    }
  
    
  }

  deleteTodo(todo: Todos) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  todoAdd(todo: Todos) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }



  toggleTodo(todo : Todos){
    let index =this.todos.indexOf(todo);
    this.todos[index].active = false;
   localStorage.setItem("todos", JSON.stringify(this.todos));

  }
}
