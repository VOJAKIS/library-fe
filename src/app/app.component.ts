import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export enum Menu {
	USERS = 'USERS',
	BOOKS = 'BOOKS',
	GENRE = 'GENRE',
	BORROWINGS = 'BORROWINGS'
}

export interface User {
  id: number,
	name: string,
	contact: string
}
export interface Book {
  id: number,
	name: string,
	author: string,
	available: number
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	userForm: FormGroup;
	bookForm: FormGroup;
	genreForm: FormGroup;
	borrowingForm: FormGroup;

  users: Array<User> = [];
  books: Array<Book> = [];

	genres: Array<{
		id: number,
		name: string
	}> = [];

	borrowings: Array<{
		id: number,
		book: Book,
		user: User
	}> = [];

	menu = Menu;
	actualMenu = Menu.BORROWINGS;

	constructor() {
		this.userForm = new FormGroup({
			id: new FormControl(),
			name: new FormControl(),
			contact: new FormControl()
		});
		this.bookForm = new FormGroup({
			id: new FormControl(),
			name: new FormControl(),
			author: new FormControl(),
			available: new FormControl()
		});
		this.genreForm = new FormGroup({
			id: new FormControl(),
			name: new FormControl(),
		});
		this.borrowingForm = new FormGroup({
			id: new FormControl(),
			book: new FormControl(),
			user: new FormControl(),
		});

    this.users.push({
      id: 0,
      name: 'User 1',
      contact: 'Yes'
    }, {
      id: 1,
      name: 'User 2',
      contact: 'Yes'
    }, {
      id: 2,
      name: 'User 3',
      contact: 'Yes'
    });

    this.books.push({
      id: 0,
      name: 'Book 1',
      author: 'Author 1',
      available: 2
    }, {
      id: 1,
      name: 'Book 2',
      author: 'Author 2',
      available: 3
    }, {
      id: 2,
      name: 'Book 3',
      author: 'Author 3',
      available: 2
    });
	}

	saveUser(): void {
		this.users.push(this.userForm.value);
		this.userForm.reset();
	}
	saveBook(): void {
		this.books.push(this.bookForm.value);
		this.bookForm.reset();
	}
	saveGenre(): void {
		this.genres.push(this.genreForm.value);
		this.genreForm.reset();
	}
	saveBorrowing(): void {
		this.borrowings.push(this.borrowingForm.value);
    this.borrowings[this.borrowings.length-1].id = this.borrowings.length - 1;
		this.borrowingForm.reset();
	}

	changeActualMenu(menuItem: Menu) {
		this.actualMenu = menuItem;
	}
}
