import { CartApiService } from './../resources/cart-api.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../auth/resources/auth';
import { AuthService } from '../../auth/resources/auth.service';
import { Book } from '../../books-shelf/resources/book';
import { Cart } from '../resources/cart';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import  * as fromAuthActions from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-cart-button-widget',
  templateUrl: './cart-button-widget.component.html',
  styleUrls: ['./cart-button-widget.component.scss']
})
export class CartButtonWidgetComponent implements OnInit {
  @Input() book: Book;
  @Input() text: string;

  selectedColor: string = 'primary';
  primaryColor: string = 'success';
  removeColor: string = 'danger';

  cartIconAdd: string = 'fas fa-cart-plus';
  cartIconRemove: string = 'fas fa-shopping-cart';
  
  icon: string = this.cartIconAdd;
  color: string = this.primaryColor;
  cart: Cart;
  user: User;
  
  constructor(
    private authService: AuthService,
    private cartService: CartApiService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {


    const observer = {
      next: (user) => {
        this.user = user;
      },
      error: (err) => console.error(err),
    };
  // console.log(this.book);
  
    this.store.select((state) => state.auth.user).subscribe(observer);

    //  this.store.select((state) => state.auth.user).subscribe(observer => {
    //   observer.purchasedBooks.push(this.book)
    //   console.log(observer);
    // });
    

    // if (this.user.id) {
    //   const observer = {
    //     next: (cart) => {
    //       this.cart = cart;
    //     },
    //     error: (err) => console.error(err),
    //   };
    //   // this.cartService.cart.subscribe(observer);
    //   // this.setButtonSettings();
    // }
  }

  updateCartApi(): void {
    // this.spinner.show();

    // const cartObserver = {
    //   next: (cart) => {
    //     this.cartService.updatedCartSelection(cart);
    //     setTimeout(() => {
    //     }, 1000);
    //   },
    //   error: (err) => {
    //     console.log(err);
        
    //   },
    // };

    // this.cartService
    //   .updateCart(this.cart.id, this.cart)
    //   .subscribe(cartObserver);
  }

  manageCartlist(): void {
     this.store.select((state) => state.auth.user).subscribe(observer => {
      observer.purchasedBooks.forEach(item => {
        item.id
      })
      // console.log(observer);
    });
    
  //   this.color = this.primaryColor;
  //   this.icon = this.cartIconAdd;

  //   if (!this.user.id) {
  //     return;
  //   }

  //   for (let index = 0; index < this.cart.purchasedBooks.length; index++) {
  //     if (this.cart.purchasedBooks[index].id == this.book.id) {
  //       this.cart.purchasedBooks.splice(index, 1);
  //       this.updateCartApi();
  //       this.setButtonSettings();
  //       return;
  //     }
  //   }
  //   this.cart.purchasedBooks.push(this.book);
  //   this.updateCartApi();
  //   this.setButtonSettings();
  // }

  // setButtonSettings() {
  //   if (this.cart.purchasedBooks) {
  //     for (let index = 0; index < this.cart.purchasedBooks.length; index++) {
  //       if (this.cart.purchasedBooks[index].id == this.product.id) {
  //         this.color = this.selectedColor;
  //         this.icon = this.cartIconRemove;
  //       }
  //     }
  //   }
  }
}
