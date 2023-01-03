import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './myComponates/todo/todo.component';
import { AddTodoComponent } from './myComponates/add-todo/add-todo.component';
import { TodoItemComponent } from './myComponates/todo-item/todo-item.component';
import { AboutTodoComponent } from './myComponates/about-todo/about-todo.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
