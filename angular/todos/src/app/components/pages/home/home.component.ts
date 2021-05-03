import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { TODOS_TYPE } from 'src/app/types/todo-type';
// import { TODOS_TYPE, TODO_TYPE } from 'src/app/types/todo-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private todoSerive:TodosService) { }

  ngOnInit(): void {
    this.todoSerive.fetchAllTodos()
  }



  
 get todos(){
   return this.todoSerive.getTodos()
 }
}
