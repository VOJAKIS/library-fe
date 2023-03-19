import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { UserComponent } from './user/user.component';
import { BorrowingComponent } from './borrowing/borrowing.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';

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
  },
  {
    path: 'book/:bookId',
    component: BookDetailComponent
  },
  { // Wildcard routes, ak ani jedna nesedí, tak choď na túto url adresu / vyrenderuj tento component
    path: '**',
    component: UserComponent,
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
