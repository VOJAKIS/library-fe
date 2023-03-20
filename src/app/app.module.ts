import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';

import { BookComponent } from './book/book.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { CategoryFormComponent } from './category/category-form/category-form.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { BorrowingFormComponent } from './borrowing/borrowing-form/borrowing-form.component';
import { BorrowingListComponent } from './borrowing/borrowing-list/borrowing-list.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { UserDetailPageComponent } from './user/user-detail-page/user-detail-page.component';
import { UserPageComponent } from './user/user-page/user-page.component';
import { BorrowingPageComponent } from './borrowing/borrowing-page/borrowing-page.component';
import { BorrowingDetailPageComponent } from './borrowing/borrowing-detail-page/borrowing-detail-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    BookComponent,
    BookListComponent,
    BookFormComponent,
    CategoryFormComponent,
    CategoryListComponent,
    UserFormComponent,
    UserListComponent,
    BorrowingFormComponent,
    BorrowingListComponent,
    BookDetailComponent,
    CategoryDetailComponent,
    UserDetailPageComponent,
    UserPageComponent,
    BorrowingPageComponent,
    BorrowingDetailPageComponent,
    BorrowingListComponent,
    BookDetailComponent,
    CategoryDetailComponent,
    UserDetailPageComponent,
    UserPageComponent,
    BorrowingPageComponent,
    BorrowingDetailPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // cez ng generate module app-routing --flat --module=app, alebo pri vytváraní projektu
    AppRoutingModule, // cez ng generate module app-routing --flat --module=app, alebo pri vytváraní projektu
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularToastifyModule,
    NgbModule
  ],
  providers: [ToastService],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
