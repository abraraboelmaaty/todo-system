import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { TodoFormUpdateComponent } from './components/pages/todo/todo-form-update/todo-form-update.component';
import { TodosComponent } from './components/pages/todos/todos.component';
import { IsAuthGuard } from './guards/is-auth.guard';
import { IsNotAuthGuard } from './guards/is-not-auth.guard';


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    canActivate:[IsNotAuthGuard]
  },
  {
    path:'signup',
    component:SignupComponent,
    canActivate:[IsNotAuthGuard]
  },
  {
    path:'singup',
    redirectTo:'/signup',
    
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[IsAuthGuard]
  },
  {
    path:'dashboard/todo/:id',
    component:TodoFormUpdateComponent
  },
  {
    path:'**',
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
