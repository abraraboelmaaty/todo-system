import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticleComponent } from './components/article/article.component';
import { DefultNavComponent } from './components/nav/defult-nav/defult-nav.component';
import { UserComponent } from './components/users/user/user.component';
import { TodoListComponent } from './components/todos/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todos/todo-list-item/todo-list-item.component';
import { TodoListFormComponent } from './components/todos/todo-list-form/todo-list-form.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { TodosComponent } from './components/pages/todos/todos.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { TodoFormUpdateComponent } from './components/pages/todo/todo-form-update/todo-form-update.component';
import { ActionNavComponent } from './components/nav/action-nav/action-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    DefultNavComponent,
    UserComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFormComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TodosComponent,
    NotfoundComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    TodoFormUpdateComponent,
    ActionNavComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
