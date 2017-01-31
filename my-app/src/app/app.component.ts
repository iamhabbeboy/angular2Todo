import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 todo = {
   title: ''
 };
 data = [];

  addTodo() {
    this.data.push(this.todo.title);
    this.todo.title = ''
  }
}
