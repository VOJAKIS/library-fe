import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { UserPageComponent } from './user/user-page/user-page.component';
import { BorrowingPageComponent } from './borrowing/borrowing-page/borrowing-page.component';
import { BookComponent } from './book/book.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { UserDetailPageComponent } from './user/user-detail-page/user-detail-page.component';
import { BorrowingDetailPageComponent } from './borrowing/borrowing-detail-page/borrowing-detail-page.component';
import { LoginPageComponent } from './authentication/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'category/:categoryId',
    component: CategoryDetailComponent
  },
  {
    path: 'user',
    component: UserPageComponent
  },
  {
    path: 'user/:userId',
    component: UserDetailPageComponent
  },
  {
    path: 'borrowing',
    component: BorrowingPageComponent
  },
  {
    path: 'borrowing/:borrowingId',
    component: BorrowingDetailPageComponent
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
    component: UserPageComponent,
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
