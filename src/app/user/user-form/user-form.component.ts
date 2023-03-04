import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserListComponent } from '../user-list/user-list.component';
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
    if (user) {
      this.form.setValue(user);
    }
  }
  // TODO: 25/41

  @Output()
  formCreate = new EventEmitter<User>();

  constructor() {
    this.form = new FormGroup({
			id: new FormControl(null, [Validators.required, Validators.min(0)]),
			name: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
			contactEmail: new FormControl(null, [Validators.required, Validators.email])
		})
  }

  saveUser(): void {
		if (this.form.valid) {
      const user: User = {
        id: Date.now(),
        name: this.form.controls['name'].value,
        contactEmail: this.form.controls['contactEmail'].value
      };

      this.formCreate.emit(user);
      this.form.reset();
    }
	}

}
