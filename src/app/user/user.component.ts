import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'app/model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userForm: FormGroup;

  users: Array<User> = [];

  constructor() {
    this.userForm = new FormGroup({
			id: new FormControl(null, [Validators.min(0)]),
			name: new FormControl(null, [Validators.required]),
			contact: new FormControl(null, [Validators.required])
		})
  }

  saveUser(): void {
		let values = this.userForm.value;
		values.id = this.users.length;
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
