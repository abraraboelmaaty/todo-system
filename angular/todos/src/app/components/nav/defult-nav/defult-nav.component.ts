import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-defult-nav',
  templateUrl: './defult-nav.component.html',
  styleUrls: ['./defult-nav.component.css']
})
export class DefultNavComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  isUserExsist():boolean{
    return this.userService.userExist()
  }

  signOut(){
    this.userService.clear()
  }
}
