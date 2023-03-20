import { Component, OnDestroy } from '@angular/core';
import { Category } from 'app/common/model/category.model';
import { CategoryService } from '../common/service/category.service';
// import { Subscription } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastService } from 'angular-toastify';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {//implements OnDestroy {


  // private getListSubscription?: Subscription;

  constructor(private service: CategoryService, private toastService: ToastService, private router: Router) {
    this.getCategories();
  }

  categories: Array<Category> = [];
  category? : Category;

  getCategories() : void {
    // this.getListUnsubscribe();
    /* this.getListSubscription = */
    this.service.getCategories().pipe(untilDestroyed(this)).subscribe((categories : Category[]) => { 
      this.categories = categories
    });
  }

  selectCategoryToUpdate(categoryId: number): void {
    this.router.navigate(['category', categoryId]);
    // this.service.getCategory(categoryId).subscribe((category: Category) => { this.category = category });
  }

  createCategory(category: Category): void {
    this.service.createCategory(category).subscribe(() => {
      console.log('Žáner bol vytvorený.');
    });
    this.getCategories();
  }



  deleteCategory(categoryId: number): void {
    if(window.confirm('Naozaj chcete vymazať tento žáner?')) {
      this.service.deleteCategory(categoryId).pipe(untilDestroyed(this)).subscribe(() => {
        this.toastService.success('Žáner bol vymazaný.');
        this.getCategories();
      }, () => {
        this.toastService.error('Chyba: Žáner nebol zmazaný.');
      });
    }
  }


  // ngOnDestroy(): void {
  //   this.getListUnsubscribe();
  // }

  // getListUnsubscribe(): void {
  //   if(this.getListSubscription) {
  //     this.getListSubscription.unsubscribe();
  //     this.getListSubscription = undefined;
  //   }
  // }
}
