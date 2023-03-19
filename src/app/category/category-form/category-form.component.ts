import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from 'app/common/model/category.model';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {

  categoryForm: FormGroup;

  @Input()
  set categoryData(category : Category | undefined) {
    if(category) {
      this.categoryForm.setValue(category);
    }
  }

  @Output()
  formCreate = new EventEmitter<Category>();

  @Output()
  formUpdate = new EventEmitter<Category>();

  @Output()
  formCancel = new EventEmitter<void>();


  constructor() {
    this.categoryForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }

  createCategory(): void {
    if(this.categoryForm.valid) {
      if(this.categoryForm.controls.id.value) {
        this.formUpdate.emit(this.prepareCategory(this.categoryForm.controls.id.value));
      } else {
        this.formCreate.emit(this.prepareCategory());
      }
    }
  }

  private prepareCategory(id? : number) : Category {
    return {
      id: id !== undefined ? id : Date.now(),
      name: this.categoryForm.controls.name.value
    }
  }

}
