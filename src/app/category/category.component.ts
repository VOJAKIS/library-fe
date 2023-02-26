import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categoryForm: FormGroup;
  formSelectedControlName = 'Pridať nový žáner';

  constructor() {
    this.categoryForm = new FormGroup({
      id: new FormControl,
      // id: new FormControl(null, Validators.required),
      name: new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }

  categories: Array<{
    id: number,
    name: string
  }> = [];

  addCategory() : void {
    this.formSelectedControlName = 'Pridať nový žáner';
    if (this.categoryForm.controls['id'].value) {
      const index = this.categories.findIndex(person => person['id'] === this.categoryForm.controls['id'].value);
      if (index !== -1) { this.categories[index] = this.categoryForm.value; }
    } else {
      this.categories.push({
        id: Date.now(),
        name: this.categoryForm.controls['name'].value,
      });
    }
    this.categoryForm.reset();
  }

  editCategory(index: number): void {
    this.formSelectedControlName = 'Úprava žánru #' + this.categories[index].id;
    this.categoryForm.setValue(this.categories[index]);
  }

  deleteCategory(index: number) : void {
    this.categories.splice(index, 1);
  }

}
