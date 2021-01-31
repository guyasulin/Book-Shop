import { BooksShelfComponent } from './books-shelf.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../auth/resources/admin.guard';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookViewComponent } from './book-view/book-view.component';
import { AuthGuard } from '../auth/resources/auth.guard';


const routes: Routes = [
  // canActivate: [AuthGuard]
  { path: 'book-shelf',component: BooksShelfComponent },
  {
    path: 'book-item/:id',
    canActivate: [AdminGuard],
    component: BookItemComponent,
  },
  {
    path: 'book-add',
    canActivate: [AdminGuard],
    component: BookAddComponent,
  },
  {
    path: 'book-edit/:id',
    canActivate: [AdminGuard],
    component: BookEditComponent,
  },
  {
    path: 'book-list',
    canActivate: [AdminGuard],
    component: BookListComponent,
  },
  {
    path: 'book-view/:id',
    component: BookViewComponent,
  },
  {
    path: 'cart',
    loadChildren: () => import('../cart/cart.module').then((m) => m.CartModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksShelfRoutingModule { }
