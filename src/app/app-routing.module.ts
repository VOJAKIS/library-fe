import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { UserComponent } from './user/user.component';
import { BorrowingComponent } from './borrowing/borrowing.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'borrowing',
    component: BorrowingComponent
  },
  {
    path: 'book',
    component: BookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
