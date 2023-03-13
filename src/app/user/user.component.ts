import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from 'app/common/model/user.model';
import { UserService } from 'app/common/service/user.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent {

	user?: User;

	users: Array<User> = [];

	constructor(private service: UserService) {
		this.getUsers();
	}

	getUsers(): void {
		this.service.getUsers().subscribe((users: User[]) => {
			this.users = users;
		});
	}

	createUser(user: User): void {
		this.service.createUser(user).subscribe(user => {
			console.log('Osoba bola úspešne uložená.');
			this.getUsers();
		})
	}

	selectUserToUpdate(userId: number): void {
		this.service.getUser(userId).subscribe((user: User) => {
			this.user = user;
		})
	 }
	 	
	updateUser(user: User): void {
		this.service.updateUser(user).subscribe(() => {
		  	console.log('Žáner bol aktualizovaný.');
		  	this.getUsers();
		});
	}
	
	  deleteUser(userId: number): void {
		this.service.deleteUser(userId).subscribe(() => {
		  console.log('Žáner bol vymazaný.');
		  this.getUsers();
		});
	  }

}
