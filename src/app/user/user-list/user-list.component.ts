import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pagination } from 'app/common/model/pagination.model';

import { User, UserResponse } from 'app/common/model/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  
  @Input()
  users?: UserResponse;
  // users: Array<User> = [];

  @Output()
  pageChange = new EventEmitter<Pagination>();

  private defaultPageNumber = 0;
  private defaultTotalElements = 10;
  private defaultPageSize = 10;
  private defaultFilter = '';

  filterForm = new FormGroup({lastName: new FormControl()});

  @Output()
  userToUpdate = new EventEmitter<number>();

  @Output()
  userToDelete = new EventEmitter<number>();

  filter(): void {
    this.defaultPageNumber = 0;
    this.defaultFilter = this.filterForm.controls.lastName.value;
    this.pageChange.emit({
      page: this.defaultPageNumber,
      size: (this.users?.pageable?.pageSize) ? this.users?.pageable?.pageSize : this.defaultPageSize,
      filter: {
        lastName: this.defaultFilter
      }
    })
  }

  updateUser(userId: number): void {
		this.userToUpdate.emit(userId);
	}

  deleteUser(userId: number): void {
		this.userToDelete.emit(userId);
	}

}
