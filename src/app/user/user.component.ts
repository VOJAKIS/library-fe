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

	constructor () {
		this.users.push({id:1677955020379,name:'Adam',contactEmail:'Valo@gmail.com'});
	}

	createUser(user: User): void {
		this.users.push(user);
		console.log('USERS: ', this.users);
	}

	updateUser(user: User): void {
		const index = this.users.findIndex(userik => userik.id === user.id);
		if (index !== -1) {
			this.users[index] = user;
			this.user = undefined;
		}
	}

	selectUserToUpdate(userId: number): void {
		this.user = this.users.find(user => user.id === userId);
	}

	deleteUser(userId: number): void {
		const index = this.users.findIndex(users => users.id === userId);
		if (index !== -1) {
			this.users.splice(index, 1);
			console.log('DELETED USER with ID: ', userId);
		}
	}

}
