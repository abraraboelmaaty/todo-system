import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TODOS_TYPE, TODO_TYPE } from '../types/todo-type';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private _todos : TODOS_TYPE[] =[]
  constructor(private http:HttpClient,private userService:UserService,private router:Router) { }
  baseUrl: string = 'http://localhost:3000/todos'



fetchAllTodos(){
  this.http.get<{todos:TODOS_TYPE[]}>(`${this.baseUrl}/all`).
  subscribe(
   (data)=>{
     this._todos = data.todos
   },
   (err)=>console.log(err)
  )
}
  
fetchUserTodos(){
  this.http.get<{todos:TODOS_TYPE[]}>(this.baseUrl,{
    headers:{
      authorization:this.userService.getToken(),
    },
  }).subscribe(
    (data)=>{
      this._todos=data.todos
      console.log(data)
    },
    err => console.log(err)
  )
}

creatTodo(todo:TODOS_TYPE){
  this.http.post(this.baseUrl,{
    title:todo.title,
    completed:todo.completed
  },{
    headers:{
      authorization:this.userService.getToken()
    }
  }).subscribe(
    (data)=>{
      this._todos.push(todo),
      this.router.navigate(['dashboard'])
    },
    (err)=>console.log(err)
  )
}

updateTodo(todo:TODOS_TYPE){
  this.http.put(`${this.baseUrl}/${todo._id}`,{
    completed:todo.completed,
    title:todo.title
  },
  {
    headers:{
      authorization:this.userService.getToken()
    }
  }).subscribe(
    (data)=>console.log(data),
    (err) => console.log(err)
  )
}

deleteTodo(id:string){
  this.http.delete(`${this.baseUrl}/${id}`,{
    headers:{
      authorization:this.userService.getToken()
    }
  }).subscribe(
    (data)=>{
      this.deleteLocalTodo(id)
    },
    (err)=>console.log(err)
  )
}

 getTodos(){
  return this._todos.slice()
 }

 findTodoById(id:string){
    return this._todos.find( todo => todo._id == id )
 }

 deleteLocalTodo(id:string){
  const todoIndex= this._todos.findIndex(todo => todo._id == id)
  if(todoIndex>-1){
    this._todos.splice(todoIndex,1)
  }
 }

}
