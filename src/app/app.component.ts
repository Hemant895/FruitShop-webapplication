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
  constructor(private router:Router) { }
 user =  localStorage.getItem('email')
 ngOnInit(): void {
  this.router.events.subscribe((val: any) => {
    if (val.url) {
      if (localStorage.getItem('email')) {
        this.menuType = 'email';
      }
       else {
        this.menuType = 'default';
      }
    }
  });
}
 login = this.user?false:true;
 loggedin = this.user?true:false;
 signOut(){
  localStorage.clear();
  this.router.navigate(["/login"]);
 }

}
