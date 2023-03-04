import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';

import { UserComponent } from './user/user.component';
import { BorrowingComponent } from './borrowing/borrowing.component';

import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { BorrowingFormComponent } from './borrowing/borrowing-form/borrowing-form.component';
import { BorrowingListComponent } from './borrowing/borrowing-list/borrowing-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    UserComponent,
    BorrowingComponent,
    BookComponent,
    UserFormComponent,
    UserListComponent,
    BorrowingFormComponent,
    BorrowingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // cez ng generate module app-routing --flat --module=app, aleob pri vytváraní projektu
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
