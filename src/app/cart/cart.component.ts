import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  array: any;
 array2 :any;
 array3:any;
 array4:any;
  constructor() { }

  ngOnInit(): void {
    this.array =[1,2,3,4,5,6,7,8,9,10];
  this.array2 = this.array.filter((ele:any)=>{
     return ele>5 ;
  })
  this.array3 = this.array.some((ele:any)=>{
    return ele>10 ;
  })
   this.array4 = this.array.find((ele:any)=>{
    return  ele ==5 ;
  })
  console.log( this.array2);
   console.log( this.array3);
  console.log( this.array4);
  }
  
}
