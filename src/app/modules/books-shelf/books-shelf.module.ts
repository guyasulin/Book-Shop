import { CartModule } from './../cart/cart.module';
import { FormsModule } from '@angular/forms';
import { BookEffects } from './state/book.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksShelfRoutingModule } from './books-shelf-routing.module';
import { BooksShelfComponent } from './books-shelf.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookViewComponent } from './book-view/book-view.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './state/book.reducer'
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserModule } from 'src/app/modules/user/user.module';

@NgModule({
	declarations: [
		BooksShelfComponent,
		BookAddComponent,
		BookEditComponent,
		BookItemComponent,
		BookListComponent,
		BookViewComponent
	],
  imports: [ 
    CommonModule,
	BooksShelfRoutingModule,
	AngularMaterialModule,
	HttpClientModule,
	FormsModule,
	SharedModule,
	CartModule,
	UserModule,
    StoreModule.forFeature(fromBook.bookFeatureKey, fromBook.reducer),
    EffectsModule.forFeature([BookEffects]),
  ]
})
export class BooksShelfModule {}
