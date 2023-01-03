import { Component, Output, EventEmitter } from '@angular/core';
import { Todos } from '../../Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  title !: string;
  desc !: string;
  @Output() addTodo: EventEmitter<Todos> = new EventEmitter();

  constructor() {

  }

  onSubmit() {
    const todo = {
      sno: 7,
      title: this.title,
      desc: this.desc,
      active: true
    }
    console.log("adding");
    this.addTodo.emit(todo);
  }
}
