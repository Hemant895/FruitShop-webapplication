import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product:any
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  // AddToCart(){
  //   if(this.productData){
  //     this.productData.quantity = this.productQuantity;
  //     if(!localStorage.getItem('user')){
  //       this.product.localAddToCart(this.productData);
  //       this.removeCart=true
  //     }else{
  //       let user = localStorage.getItem('user');
  //       let userId= user && JSON.parse(user).id;
  //       let cartData:cart={
  //         ...this.productData,
  //         productId:this.productData.id,
  //         userId
  //       }
  //       delete cartData.id;
  //       this.product.addToCart(cartData).subscribe((result)=>{
  //         if(result){
  //          this.product.getCartList(userId);
  //          this.removeCart=true
  //         }
  //       })        
  //     }
      
  //   } 
  //   // this.router.navigate(['/cart']);
  // }
}
