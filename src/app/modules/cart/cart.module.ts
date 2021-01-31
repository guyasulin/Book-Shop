import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartButtonWidgetComponent } from './cart-button-widget/cart-button-widget.component';
import { CartLinkWidgetComponent } from './cart-link-widget/cart-link-widget.component';
import { CartComponent } from './cart.component';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    CartButtonWidgetComponent, 
    CartLinkWidgetComponent, 
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
  ],
  exports: [
    CartButtonWidgetComponent, 
    CartLinkWidgetComponent,
  ],
})
export class CartModule { }
