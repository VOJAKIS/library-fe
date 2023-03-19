import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { Category } from 'app/common/model/category.model';
import { CategoryService } from 'app/common/service/category.service';
import { untilDestroyed } from '@ngneat/until-destroy';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent {

  category?: Category;

  private categoryId: number | null;

  constructor(private router: Router, private route: ActivatedRoute, private service: CategoryService, private toastService: ToastService) {
    this.categoryId = Number(route.snapshot.paramMap.get('categoryId'));
    this.getCategory();
  }

  getCategory(): void {
    if(this.categoryId) {
      this.service.getCategory(this.categoryId).pipe(untilDestroyed(this)).subscribe((category: Category) => {
        this.category = category;
      })
    }
  }

  updateCategory(category: Category): void {
    this.service.updateCategory(category).pipe(untilDestroyed(this)).subscribe(() => {
      this.toastService.success('Źáner bol úspešne zmenený!');
    }, () => {
      this.toastService.error('Chyba: Žáner nebol zmenený.')
    });
  }

  cancel(): void {
    this.router.navigate(['category']);
  }
}
