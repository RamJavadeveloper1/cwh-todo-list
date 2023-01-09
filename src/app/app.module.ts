import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './myComponates/todo/todo.component';
import { AddTodoComponent } from './myComponates/add-todo/add-todo.component';
import { TodoItemComponent } from './myComponates/todo-item/todo-item.component';
import { AboutTodoComponent } from './myComponates/about-todo/about-todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddTodoComponent,
    TodoItemComponent,
    AboutTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
