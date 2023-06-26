import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AuthGuard } from './auth.guard';
import { VarifyEmailComponent } from './varify-email/varify-email.component';
import { AddProductComponent } from './add-product/add-product.component';
const routes: Routes = [

{path: '',component:HeaderComponent},
 {path: 'home',component:HomeComponent},
//  {path: 'product',component:ProductComponent},
 {path: 'cart',component:CartComponent , canActivate:[AuthGuard]},
 {path: 'footer',component:FooterComponent},
 {path:"product" , loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
 {path:"login",component:LoginComponent},
 {path:"signup",component:SignupComponent},
 {path:"resetpassword",component:ForgetPasswordComponent},
 {path:"product-details",component:ProductListComponent, canActivate:[AuthGuard]},
 {path:"verify-email",component:VarifyEmailComponent},
 {path:"add-product",component:AddProductComponent ,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
