import { Component } from '@angular/core';
import { User } from 'app/model/user.model';
import { UserService } from './user.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent {

	user?: User;

	users: Array<User> = [];

	constructor (private service : UserService) {
		this.users.push({id:1677955020379,name:'Adam',contactEmail:'Valo@gmail.com'});
	}

	getPersons(): void {
		this.service.getUsers().subscribe((users: User[]) => { this.users = users });
	}

	createUser(user: User): void {
		this.service.createUser(user).subscribe(() => {
			console.log('Osoba bola uložená.');
			this.getPersons();
		});
	}

	updateUser(user: User): void {
		this.service.updateUser(user).subscribe(() => {
			console.log('Osoba bola úspešne zmenená.');
			this.getPersons();
		});
	}

	selectUserToUpdate(userId: number): void {
		this.service.getUser(userId).subscribe((user: User) => { this.user = user });
	}

	deleteUser(userId: number): void {
		this.service.deleteUser(userId).subscribe(() => {
			console.log('Osoba bola úspešne zmazaná.');
			this.getPersons();
		});
	}

}
