import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';

import { UserComponent } from './user/user.component';
import { BorrowingComponent } from './borrowing/borrowing.component';

import { BookComponent } from './book/book.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookFormComponent } from './book/book-form/book-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    UserComponent,
    BorrowingComponent,
    BookComponent,
    BookListComponent,
    BookFormComponent
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
