import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'app/model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

	lastIndex: number = 0;
  userForm: FormGroup;

  users: Array<User> = [];

  constructor() {
		this.userForm = new FormGroup({
			id: new FormControl(null, [Validators.required, Validators.min(0)]),
			name: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
			contactEmail: new FormControl(null, [Validators.required, Validators.email])
		})

		// TESTING
		/* this.users.push(
			{id: 0, name: 'Adam', contactEmail: 'adam@gmail.com'},
			{id: 1, name: 'Jakub', contactEmail: 'jakub@gmail.com'},
			{id: 2, name: 'Lucka', contactEmail: 'lucka@gmail.com'}
		); */
  }

  saveUser(): void {
		let values = this.userForm.value;
		
		for (let i = 0; i<this.users.length; i++) {
			if (this.userForm.value.id == this.users[i].id) {
				this.users[i].name = values.name;
				this.users[i].contactEmail = values.contactEmail;
				this.userForm.reset();
				return;
			}
		}
		
		values.id = this.lastIndex++;
		this.users.push(values);
		this.userForm.reset();
	}

	deleteUser(index: number): void {
		this.users.splice(index, 1);
	}
	
  editUser(index: number): void {
		this.userForm.setValue(this.users[index]);
	}

}
