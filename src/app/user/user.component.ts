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

	constructor (private http: HttpClient, private userService: UserService) {
		this.users.push({id:1677955020379,firstName:'Adam',lastName:'Valo@gmail.com'});
		this.getUsers();
	}

	getUsers(): void {
		this.userService.getUsers().subscribe((users: User[]) => {
			this.users = users;
		});
	}

	createUser(user: User): void {
		this.userService.createUser(user).subscribe(user => {
			console.log('Osoba bola úspešne uložená.');
			this.getUsers();
		})
	}

	// TODO: Dokončiť z tadeto, zobrať this.http.get ... a vložiť do user.service.ts
	selectUserToUpdate(userId: number): void {
		this.http.get<User>(`http://labs.fpv.umb.sk:8080/api/customers/${userId}`).subscribe((user: User) => {
			this.user = user;
		});
	 }
	 
	updateUser(user: User): void {
		this.http.put(`http://labs.fpv.umb.sk:8080/api/customers/${user.id}`, user).subscribe(user => {
			console.log('Osoba bola úspešne zmenená.');
			this.getUsers();
		})
	 }

	 deleteUser(userId: number): void {
		this.http.delete(`http://labs.fpv.umb.sk:8080/api/customers/${userId}`).subscribe(() => {
			console.log('Osoba bola úspešne zmazaná.');
			this.getUsers();
		})
	 }

 

	/* createUser(user: User): void {
		this.users.push(user);
		console.log('USERS: ', this.users);
	} */

	/* updateUser(user: User): void {
		const index = this.users.findIndex(userik => userik.id === user.id);
		if (index !== -1) {
			this.users[index] = user;
			this.user = undefined;
		}
	} */

	/* selectUserToUpdate(userId: number): void {
		this.user = this.users.find(user => user.id === userId);
	} */

	/* deleteUser(userId: number): void {
		const index = this.users.findIndex(users => users.id === userId);
		if (index !== -1) {
			this.users.splice(index, 1);
			console.log('DELETED USER with ID: ', userId);
		}
	} */

}
