import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { map } from 'rxjs/operators';
import { fruishop } from '../module-name/fruishop.module';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  fruitshop:any

  private dbPath = '/fruitshop-data';
  fruitshopRef?: AngularFireList<fruishop>;
  years?: Observable<any>;
  data?:[]
  product: any;
  productdata: any;
  constructor(private api :ApiService,private db: AngularFireDatabase , private spinner:NgxSpinnerService,private router:Router) {

   }

  ngOnInit(): void {
    // this.getData();
    this.get()
  }
  
  
  // getData(){
  //   this.api.getdata().subscribe((res)=>{
  
  //     console.log( res)
  //   })
  // }
 products = [
    {
        "img": "https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-apples-1200x628-facebook-1200x628.jpg",
        "rupees": "50",
        "title": "Kashmiri Apples"
    },
    {
        "img": "https://th.bing.com/th/id/OIP.D5X6ywzirpcTg1C3BoFUlwHaEo?pid=ImgDet&rs=1",
        "rupees": "20",
        "title": "Fresh bananas"
    },
    {
        "img": "https://photo-cdn.urdupoint.com/show_img_new/women/women_article_images/2018/670x420/pic_7f1bc_1519983427.jpg._3",
        "rupees": "30",
        "title": "Green Grapes"
    },
    {
        "img": "https://th.bing.com/th/id/R.876223bd3634565f2a8b2b436fa82173?rik=VD0%2bCzTKI3Wjgw&riu=http%3a%2f%2fwww.watamukenya.net%2fimages%2fuploads%2farticoli%2f307_l.jpg&ehk=ZlmNDOugslpFNQ5eYVioTV3jAlOdEgYZTs7g%2fu9k42M%3d&risl=&pid=ImgRaw&r=0",
        "rupees": "50",
        "title": "Papaya"
    },
    {
        "img": "https://1.bp.blogspot.com/-g2Qr_INiHX8/Uq59JZQdseI/AAAAAAAACjg/WgFVBDipe7g/s1600/cherries.jpg",
        "rupees": "50",
        "title": "Cherry"
    },
    {
        "img": "https://wallpapercave.com/wp/77k3bCC.jpg",
        "rupees": "60",
        "title": "Mangos"
    },
    {
        "img": "https://media.self.com/photos/5b4371cc4d0c3c282a8878d3/4:3/w_2560%2Cc_limit/pineapple.jpg",
        "rupees": "30",
        "title": "Pineapple"
    },
    {
      "img": "https://www.windsoreats.com/wp-content/uploads/2015/05/strawberry1.jpg",
      "rupees": "90",
      "title": "Strawberry "
   }

]

onsaveproduct(){
  this.api.saveproduct(this.products).subscribe(res=>{
    console.log(res);
  })
}
get(){
  this.api.getdata().subscribe({
    next: (res) =>{
      this.spinner.show();
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 1000);
      this.fruitshop = res
      this.product = this.fruitshop.mydata;
      console.log("get",this.product);
    },
    error: (e) =>{console.log(e)}
 });}
  // get(){
  //   this.api.getdata().subscribe(res=>{
      
  //     this.spinner.show();
  //     setTimeout(() => {
  //       /** spinner ends after 5 seconds */
  //       this.spinner.hide();
  //     }, 1000);
  //     this.fruitshop = JSON.stringify(res)
  //     this.product = JSON.parse(this.fruitshop)
  //     console.log("get",this.product);
  //   },(err)=> void {
  //     console.log(err)
  //   })
  // }
  AddToCart(){
      this.router.navigate(["/product-details"]);
  }

  sort(order:any){
  switch (order.target.value) {
          case "Low" : {
              this.product = this.product.sort((a:any,b:any)=>{
                 return a.price - b.price
              });
              console.log(this.product)
              break;          
          }
          case "High" : {
            this.product = this.product.sort((a:any,b:any)=>{
               return b.price - a.price;
            });
            console.log(this.product)
            break;          
        }
        case "Name": {
          this.product = this.product.sort(
            (low:any, high:any) => {
           return  high.title.toLowerCase().trim() <  low.title.trim().toLowerCase() ? 1 : -1
          }
          );
          break;
        }
  }
}
}
