import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { UserComponent } from './user/user.component';
import { BorrowingComponent } from './borrowing/borrowing.component';

const routes: Routes = [
  {
    path: 'categories',
    component: CategoryComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'borrowing',
    component: BorrowingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
