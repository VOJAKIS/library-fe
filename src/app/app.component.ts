import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export enum Menu {
	USERS = 'USERS',
	BOOKS = 'BOOKS',
	BORROWINGS = 'BORROWINGS'
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	form: FormGroup;

	persons: Array<{
		name: string,
		surname: string
	}> = [];

	menu = Menu;
	actualMenu = Menu.BOOKS;

	constructor() {
		this.form = new FormGroup({
			name: new FormControl(),
			surname: new FormControl()
		})
	}

	savePerson(): void {
		this.persons.push(this.form.value);
		console.log("Vypisujem osoby.");
		this.persons.forEach((e) => {
			this.logPerson(e);
		});
		this.form.reset();
	}

	logPerson(person: {name:string, surname:string}): void {
		console.log(person.name, person.surname);
	}
}
