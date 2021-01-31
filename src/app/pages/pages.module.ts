import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NotFoundComponent, HomeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule
  ],
  exports: [NotFoundComponent, HomeComponent],
})
export class PagesModule { }
