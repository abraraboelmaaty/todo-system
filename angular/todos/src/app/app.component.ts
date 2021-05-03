import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //**************************************sesstion 12 **************************/
  //***************1-interpolation{{value||variable||methode||expretion in one line}} ***************/
  title:string = 'hello from angular'
  classList:string = 'main header'
  isAdmin :boolean = false
  getUser() :string {
    return this.isAdmin? 'admin':'publisher'
  }
  // *********************************2-property binding*********************
  inputType:string = "text"
  isPlaseHolder():string{
    return this.isAdmin? 'type any thing' : 'go away'
  }
  isDisabeld = false

  //**************************************3-class binding***************** */
  //**************************************[ngClass]**************** */
  setClass():Record<string,boolean>{
    return{
      main:true,
      red:this.isAdmin,
      green:!this.isAdmin
    }
    
  }

  //**************************************4-style binding***************** */
  //**************************************[ngStyle]**************** */
  setStyle():Record<string,any>{
    return{
      color:this.isAdmin? 'brown' :this.isDisabeld? 'blue' :'green',
      fontSize:this.isAdmin?'30px' : '25px'
    }
  }
  // *********************************5-event binding**************************

  toggleState(){
    this.isAdmin = !this.isAdmin
    this.isDisabeld = !this.isDisabeld
  }

  printVlue(e:KeyboardEvent){
    let target = e.target as HTMLInputElement
    console.log(target.value)
  }

  //***************************************6- tamplet refrence****************** */
  printInput(v:HTMLElement){
    // console.log(v)
    console.log(this.email)
    this.email='changed@gggs'
  }
  // ***************************two way data binding *******************
  email = "abrar@gmail.com"
  updateInput(e:KeyboardEvent){
    let target = e.target as HTMLInputElement
    let value = target.value
    this.email=value
  }

  //*******************************************session 13****************** */
  showArticle:boolean = true

  // **************componant interAction (@input(),@output())**********************
  users =[
    {id:1,name:'abrar',age:24},
    {id:2,name:'tasneem',age:22},
    {id:1,name:'alia',age:13}
  ]
  upDateUserName(userData:any){
    console.log(userData)
    const user = this.users.find(user =>user.id == Number(userData.id))!
    console.log(user)
    user.name=userData.name
    console.log(user)
  }


  //  updateName(userData:any){
  //   console.log(userData)
  //   const user = this.users.find(user=>user.id == Number(userData.id))!
  //   console.log(user)
  //   user.name = userData.name
  //   console.log(user)
  // }
}


