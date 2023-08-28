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
    return this.httpClient.post("https://nodejsapi-production.up.railway.app/addproduct" , data)
  }
  getdata(){
    return this.httpClient.get("https://nodejsapi-production.up.railway.app/api/products")
  }
  // getdata(){
  //   return  this.httpClient.get('http://localhost:3000/api/products')
  // }

  getapidata(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/photos');
  }

}
