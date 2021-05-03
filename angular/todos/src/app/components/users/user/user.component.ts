import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user:any;
  @Output() upDateEvent = new EventEmitter()
  // @Output() updateUserNameEvent = new EventEmitter()

  name:string=''

  constructor() { }

  ngOnInit(): void {
    // this.name =this.user.name
  }
  activeEmitter(inputValue:string){
    this.upDateEvent.emit({
      id:this.user.id,
      name:inputValue,
      age:this.user.age
    })
  }

  // eventEmitt(value:string){
   
      
  //     this.updateUserNameEvent.emit({
  //       id:this.user.id,
  //       name:value,
  //       age:this.user.age

  //     })
  //   }
  }


