import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-orderspopup',
  templateUrl: './orderspopup.component.html',
  styleUrls: ['./orderspopup.component.css']
})
export class OrderspopupComponent implements OnInit{

  orders: Order[] = []

  constructor(private orderService: OrderService, private loginService: LoginService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders[this.loginService.getUsername()]
    })
  }

}
