import { Component } from '@angular/core';
import { User } from 'app/model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

	user?: User;

  users: Array<User> = [];

  constructor() {
		// TESTING
		/* this.users.push(
			{id: 0, name: 'Adam', contactEmail: 'adam@gmail.com'},
			{id: 1, name: 'Jakub', contactEmail: 'jakub@gmail.com'},
			{id: 2, name: 'Lucka', contactEmail: 'lucka@gmail.com'}
		); */
  }

  createUser(user: User): void {
		this.users.push(user);
		console.log('USERS: ', this.users);
	}


	updateUser(user: User): void {

	}

	selectUserToUpdate(userId: number): void {
		this.users.find(user => user.id === userId);
		console.log('SELECTED USER TO UPDATE');
	}


	deleteUser(userId: number): void {
		const index = this.users.findIndex(users => users.id === userId);
		if (index !== -1) {
			this.users.splice(index, 1);
			console.log('DELETED USER with ID: ', userId);
		}
	}

}
