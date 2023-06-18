import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { fruishop } from '../module-name/fruishop.module';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private dbPath = '/fruitshop-data';
 fruitshopRef: AngularFireList<fruishop>;
  constructor(private db: AngularFireDatabase,private httpClient:HttpClient) { 
    this.fruitshopRef = db.list(this.dbPath);
  }
  getAll(): AngularFireList<fruishop> {
    return this.fruitshopRef;
  }
 saveproduct(data:any[]){
    return this.httpClient.put("https://fruitshop-a60d4-default-rtdb.firebaseio.com/products.json" , data)
  }
  getdata(){
    return this.httpClient.get("https://fruitshop-a60d4-default-rtdb.firebaseio.com/products.json" )
  }
}
