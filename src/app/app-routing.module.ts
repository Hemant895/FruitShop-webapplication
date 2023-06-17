import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [

{path: '',component:HeaderComponent},
 {path: 'home',component:HomeComponent},
//  {path: 'product',component:ProductComponent},
 {path: 'product-details',component:ProductListComponent},
 {path: 'cart',component:CartComponent},
 {path: 'footer',component:FooterComponent},
 {path:"product" , loadChildren: () => import('./product/product.module').then(m => m.ProductModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
