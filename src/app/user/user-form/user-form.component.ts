import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from 'app/model/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  form: FormGroup;

  @Input()
  set userData(user: User | undefined) {
    console.log(user);
    if (user) {
      this.form.setValue(user);
    }
  }

  @Output()
  formCreate = new EventEmitter<User>();

  @Output()
  formUpdate = new EventEmitter<User>();

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(0, Validators.required),
			name: new FormControl('Adam', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
			contactEmail: new FormControl('asd@mil.com', [Validators.required, Validators.email])
		})
  }

  saveUser(): void {
		if (this.form.valid) {
      if (this.form.controls['id'].value) {
        this.formUpdate.emit(this.prepareUser(this.form.controls['id'].value));
      } else {
        this.formCreate.emit(this.prepareUser());
      }
      this.form.reset();
    }
	}

  private prepareUser(userId?: number): User {
    return {
      id: userId !== undefined ? userId : Date.now(),
      name: this.form.controls['name'].value,
      contactEmail: this.form.controls['contactEmail'].value
    }
  }

}
