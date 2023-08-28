import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productform:FormGroup | any ;
  constructor(private formBuilder: FormBuilder,private api :ApiService,private db: AngularFireDatabase , private spinner:NgxSpinnerService,private router:Router) { }

  ngOnInit(): void {
    this.productform = this.formBuilder.group({
      title: ['', [Validators.required]],
      img :['',[Validators.required,]],
      rupees:[Number,[Validators.required,]]
    });
  }
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

   
 submitform(){
// this.products= {
//     title: this.productform.value.title,
//     img: this.productform.value.img,
//     rupees: this.productform.value.rupees,
//       };
      let products:any ={
   title: this.productform.value.title,
    img: this.productform.value.img,
    price: this.productform.value.rupees,
           }
  console.log(this.productform.value)
  this.api.saveproduct(products).subscribe({
    next: (res) =>{console.log(res)},
    error:(err) =>{console.log(err)}
  })
  window.alert("product added successfully ")
  this.productform.reset();

 }
}
