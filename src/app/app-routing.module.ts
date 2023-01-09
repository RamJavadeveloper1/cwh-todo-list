import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './myComponates/todo/todo.component';
import { AboutTodoComponent } from './myComponates/about-todo/about-todo.component';

const routes: Routes =  [
  { path: '', component: TodoComponent },
  { path: 'about', component: AboutTodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
