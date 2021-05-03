import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { TODO_TYPE } from 'src/app/types/todo-type';


@Component({
  selector: 'app-todo-list-form',
  templateUrl: './todo-list-form.component.html',
  styleUrls: ['./todo-list-form.component.css']
})
export class TodoListFormComponent implements OnInit {

  
  constructor(private todosServise:TodosService) { }
  todoTitle :string = ''
  ngOnInit(): void {
  }

}
