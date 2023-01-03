import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todos } from '../../Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo !: Todos;
  @Output() todoDelete: EventEmitter<Todos> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todos> = new EventEmitter();

  OnClick(todo: Todos) {
    console.log("Todo click")
    this.todoDelete.emit(todo);
  }

  OncheboxClick(todo: Todos) {
    this.todoCheckbox.emit(todo);
  }
}
