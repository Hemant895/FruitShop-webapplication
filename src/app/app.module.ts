import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VarifyEmailComponent } from './varify-email/varify-email.component';
import { AddProductComponent } from './add-product/add-product.component';
import { TestapiComponent } from './testapi/testapi.component';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    ProductListComponent,
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent,
    VarifyEmailComponent,
    AddProductComponent,
    TestapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule,
   NgxSpinnerModule,
   BrowserAnimationsModule,
   ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
