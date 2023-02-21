import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BookComponent } from './book/book.component';
import { GenreComponent } from './genre/genre.component';
import { BorrowingComponent } from './borrowing/borrowing.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BookComponent,
    GenreComponent,
    BorrowingComponent
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
