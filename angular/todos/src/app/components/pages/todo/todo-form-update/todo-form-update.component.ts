import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';
import { defultTodo, TODOS_TYPE } from 'src/app/types/todo-type';
import { updateLanguageServiceSourceFile } from 'typescript';

@Component({
  selector: 'app-todo-form-update',
  templateUrl: './todo-form-update.component.html',
  styleUrls: ['./todo-form-update.component.css']
})
export class TodoFormUpdateComponent implements OnInit {

  constructor(private todoService:TodosService,private route:ActivatedRoute,private router:Router) { }
  todo:TODOS_TYPE = defultTodo
  updateState:boolean = true
  ngOnInit(): void {

  const id :string = this.route.snapshot.paramMap.get('id')!
  if(id==='new'){
    this.updateState=false
    return
  }

  this.todo = this.todoService.findTodoById(id)!
  
  }

 updateTodo(){
   this.todoService.updateTodo(this.todo)
 }

 navigateToDashboard(){
   this.router.navigate(['dashboard'])
 }

 creatTodo(){
   this.todoService.creatTodo(this.todo)
 }
}
