import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Order } from './order';
import { Time } from '@angular/common';
import { CartService } from './cart.service';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private loginService: LoginService, private cartService: CartService) { }

  createOrder(){
    this.cartService.getCartItems().subscribe(prods => {
      var orderDate = new Date()
      var order: Order = {
        orderDate: orderDate,
        orderTime: {
          hours: orderDate.getHours(),
          minutes: orderDate.getMinutes()
        },
        productids: prods[this.loginService.getUsername()]
      }
      this.getOrders().subscribe(items => {
        if (items!=null){
          var body = {
            [this.loginService.getUsername()]: [order].concat(items[this.loginService.getUsername()])
         }
        }
        else{
          var body = {
            [this.loginService.getUsername()]: [order]
         }
        }
       this.http.patch("https://finalexam-13182-default-rtdb.firebaseio.com/" +
       "orders.json", body).subscribe()
      this.cartService.deleteCart()
      })
    })
    



  }

  getOrders(): Observable<{[key:string]:Order[]}>{
    return this
    .http
    .get<{[key:string]:Order[]}>
    ("https://finalexam-13182-default-rtdb.firebaseio.com/orders.json")
  }

}
