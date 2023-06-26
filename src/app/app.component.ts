import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menuType: string = 'default';
  sellerStore:string="";
  title = 'fruitshop';
  user?:string;
  constructor(private router:Router) { }
 show= true

 ngOnInit(): void {
  setInterval(()=>{
    this.user =  localStorage.getItem('email')?.slice(1,7)
  })
   
  this.router.events.subscribe((val: any) => {
    if (val.url) {
      if (localStorage.getItem('email')) {
        this.menuType = 'email';
        this.show= false;
      }
       else {
        this.menuType = 'default';
        this.show= true
      }
    }
  });
}
//  login = this.user?false:true;
//  loggedin = this.user?true:false;
 signOut(){
  localStorage.clear();
  this.router.navigate(["/login"]);
 }

}
