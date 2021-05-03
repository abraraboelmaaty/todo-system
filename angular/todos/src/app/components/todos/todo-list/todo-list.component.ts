import { Component, Input, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { TODOS_TYPE, TODO_TYPE } from 'src/app/types/todo-type';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() showActions:boolean=true
  constructor(private todosServise: TodosService) { }
  @Input() todosList:TODOS_TYPE[]=[]
  @Input() autofetch:boolean = true
  ngOnInit(): void {
     if(this.autofetch){
      this.todosServise.fetchUserTodos()
     }
   
  }

  get todos(){
    return this.todosServise.getTodos()
  }

 
}
