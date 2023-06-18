import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgxSpinnerModule 
  ]
})
export class ProductModule { }
