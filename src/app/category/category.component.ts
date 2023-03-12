import { Component } from '@angular/core';
import { Category } from 'app/model/category';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  constructor(private service: CategoryService) {
    this.getCategories();
  }

  categories: Array<Category> = [];
  category? : Category;

  getCategories() : void {
    this.service.getCategories().subscribe((categories : Category[]) => { this.categories = categories });
  }

  selectCategoryToUpdate(categoryId: number): void {
    this.service.getCategory(categoryId).subscribe((category: Category) => { this.category = category });
  }

  createCategory(category: Category): void {
    this.service.createCategory(category).subscribe(() => {
      console.log('Žáner bol vytvorený.');
      this.getCategories();
    });
  }

  updateCategory(category: Category): void {
    this.service.updateCategory(category).subscribe(() => {
      console.log('Žáner bol aktualizovaný.');
      this.getCategories();
    });
  }

  deleteCategory(categoryId: number): void {
    this.service.deleteCategory(categoryId).subscribe(() => {
      console.log('Žáner bol vymazaný.');
      this.getCategories();
    });
  }

}
