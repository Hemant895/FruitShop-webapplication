import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  fruitshop?: string;
  product: any;

  constructor(private api :ApiService,private db: AngularFireDatabase ) { }

  ngOnInit(): void {
    this.get();
  }
  get(){
    this.api.getdata().subscribe(res=>{
      this.fruitshop = JSON.stringify(res)
      this.product = JSON.parse(this.fruitshop)
      console.log("get",this.product);
    },(err)=>{
      console.log(err)
    })
  }
}
