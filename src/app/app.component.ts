import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './model/user.model';

export enum Menu {
	USERS = 'USERS',
	BOOKS = 'BOOKS',
	GENRE = 'GENRE',
	BORROWINGS = 'BORROWINGS'
}

/* abstract class Tab {
	protected id: number;
	protected values = Array<{}>;

	constructor(id:number) {
		this.id = id;
	}

	abstract save(): void;
}

export class Books extends Tab {
	constructor(id:number) {
		super(id);
		console.log(this.id);
	}

	save() {

	}
}

class Users extends Tab {
	name:string;
	contact:string;

	constructor( id:number, name:string, contact:string) {
		super(id);
		this.name = name;
		this.contact = contact;
	}

	save() {

	}
} */

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	bookForm: FormGroup;
	genreForm: FormGroup;
	borrowingForm: FormGroup;

	// Je možné spraviť aj takto
	/* users: Array<{
		id: number,
		name: string,
		contact: string
	}> = []; */
	users: Array<User> = [];

	books: Array<{
		id: number,
		name: string,
		author: string,
		available: number
	}> = [];

	genres: Array<{
		id: number,
		name: string
	}> = [];

	borrowings: Array<{
		id: number,
		book: string,
		user: string
	}> = [];

	menu = Menu;
	actualMenu = Menu.USERS;

	constructor() {
		
		this.bookForm = new FormGroup({
			id: new FormControl(),
			name: new FormControl(),
			author: new FormControl(),
			available: new FormControl()
		})
		this.genreForm = new FormGroup({
			id: new FormControl(),
			name: new FormControl(),
		})
		this.borrowingForm = new FormGroup({
			id: new FormControl(),
			book: new FormControl(),
			user: new FormControl(),
		})
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
		this.borrowingForm.reset();
	}

	
	changeActualMenu(menuItem: Menu) {
		this.actualMenu = menuItem;
	}
}
