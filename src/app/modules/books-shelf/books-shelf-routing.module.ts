import { BooksShelfComponent } from './books-shelf.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../auth/resources/admin.guard';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';


const routes: Routes = [
  { path: 'book-shelf',component: BooksShelfComponent },
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksShelfRoutingModule { }
