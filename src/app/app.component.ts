import {Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormControl, FormGroup, Validators} from "@angular/forms";

export enum Menu {

  BOOKS = 'BOOKS', // Defaultne nastavi 0 - n ak nezadame hodnotu
  USERS = 'USERS',
  BORROWINGS = 'BORROWINGS',
  GENRES = 'GENRES'
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  pageTitle = 'wete3_2023-02-20_zadanie2';
  userForm: FormGroup;
  bookForm: FormGroup;
  borrForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      id: new FormControl,
      name: new FormControl,
      contact: new FormControl,
    })
    this.bookForm = new FormGroup({
      id: new FormControl,
      name: new FormControl,
      author: new FormControl,
      availability: new FormControl
    });
    this.borrForm = new FormGroup({
      id: new FormControl,
      book_name: new FormControl,
      user_name: new FormControl
    });
  }

  // persons: Array<any> = []; // Inicializacia zoznam osob, na ukladanie, bez vkladania z formulara
  /*persons: Array<{ // Inicializacia zoznamu osob, na ukladanie z formulara
    name: string,
    surname: string
  }> = [];*/

  users: Array<{
    id: number,
    name: number,
    contact: string
  }> = [];

  books: Array<{
    id: number,
    name: string,
    author: string,
    availability: boolean
  }> = [];

  borrowings: Array<{
    id: number,
    book_name: string,
    user_name: string
  }> = [];

  menu = Menu;
  actualMenu = Menu.BOOKS;


  saveUser() : void {
    this.users.push(this.userForm.value);
    this.userForm.reset();
  }

  saveBook() : void {
    this.books.push(this.bookForm.value);
    this.bookForm.reset();
  }

  saveBorrowing() : void {
    let check : any = new Array(this.borrForm.value)[0];
    console.log(check);
    if(check.id != null || check.book_name != null || check.user_name != null) {
      this.borrowings.push(this.borrForm.value);
      console.log(this.borrowings);
    }
    this.borrForm.reset();
  }

  updateSelection(): void {
    this.books = this.books;
  }

  /*savePerson() : void {
    console.log('OSOBA:', this.form.value);
    this.persons.push(this.form.value); // pridanie osoby do zoznamu
    console.log(this.persons);
    this.form.reset(); // Vynuluje FormControls (formular)
  }*/

  changeMenu(menuItem : Menu) : void {
    this.actualMenu = menuItem;
  }

}

// actualMenu: Menu = Menu.USERS -> nemusim definovat typ premennej
