import { Component } from '@angular/core';
import { Category } from 'app/model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {


  categories: Array<Category> = [];
  category? : Category;


  createCategory(category: Category): void {
    this.categories.push(category);
  }

  updateCategory(category: Category): void {
    const index = this.categories.findIndex(category => category.id === category.id);
    if (index !== -1) {
      this.categories[index] = category;
      this.category = undefined;
    }
  }

  selectCategoryToUpdate(categoryId: number): void {
    this.category = this.categories.find(category => category.id === categoryId);
  }

  deleteCategory(categoryId: number): void {
    const index = this.categories.findIndex(category => category.id === categoryId);
    if (index !== -1) {
      this.categories.splice(index, 1);
    }
  }

}
