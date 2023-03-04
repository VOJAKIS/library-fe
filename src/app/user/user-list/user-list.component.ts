import { Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from 'app/model/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  
  @Input()
  users: Array<User> = [];

  @Output()
  userToUpdate = new EventEmitter<number>();

  @Output()
  userToDelete = new EventEmitter<number>();

  updateUser(userId: number): void {
    console.log(userId);
		this.userToUpdate.emit(userId);
	}

  deleteUser(userId: number): void {
		this.userToDelete.emit(userId);
	}

}
