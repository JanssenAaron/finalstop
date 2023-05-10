import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { ProductServiceService } from './product-service.service';
import { LoginService } from './login.service';
import { OrderService } from './order.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient, private prodService: ProductServiceService, private loginService: LoginService) { }


  cartTotal = 0

  getCartItems(): Observable<{[key:string]:number[]}>{
    return this
    .http
    .get<{[key:string]:number[]}>
    ("https://finalexam-13182-default-rtdb.firebaseio.com/carts.json")
  }

  addToCart(id:number){
    this.getCartItems().subscribe(items => {
      if (items!=null){
        var body = {
          [this.loginService.getUsername()]: [id].concat(items[this.loginService.getUsername()])
       }
      }
      else{
        var body = {
          [this.loginService.getUsername()]: [id]
       }
      }
     this.http.patch("https://finalexam-13182-default-rtdb.firebaseio.com/" +
     "carts.json", body).subscribe()

    })
  }

  deleteCart(){
    var body = {
      [this.loginService.getUsername()]: []
    }
     this.http.patch("https://finalexam-13182-default-rtdb.firebaseio.com/" +
     "carts.json", body).subscribe()
  }

}
