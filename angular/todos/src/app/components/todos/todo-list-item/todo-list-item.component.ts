import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';

import { defultTodo, TODOS_TYPE, TODO_TYPE } from 'src/app/types/todo-type';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  
  @Input() todo:TODOS_TYPE = defultTodo
  @Input() showActions:boolean=true

   todos:TODOS_TYPE =defultTodo
  constructor(private todosService:TodosService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
  }
  
 navigateFormUpdate(id:string){
   this.router.navigate(['dashboard','todo',id])
 }


 

  deleteTodo(){
    this.todosService.deleteTodo(this.todo._id)
  }
}
